class Worker4 {

    firstJob = (sourceTables, sourcePulledNumbers) => {
        for (const pulledNumber of sourcePulledNumbers) {
            for (let tableIndex = 0; tableIndex < sourceTables.length; tableIndex++) {
                for (let rowIndex = 0; rowIndex < sourceTables[tableIndex].length; rowIndex++) {
                    for (let valueIndex = 0; valueIndex < sourceTables[tableIndex][rowIndex].length; valueIndex++) {
                        if (
                            sourceTables[tableIndex][rowIndex][valueIndex].value === pulledNumber &&
                            sourceTables[tableIndex][rowIndex][valueIndex].marked === false
                        ) {
                            sourceTables[tableIndex][rowIndex][valueIndex].marked = true;
                        }
                    }
                }
                const isBingo = this.bingoHelper(sourceTables[tableIndex]);
                let remainderSum = 0;
                if (isBingo) {
                    sourceTables[tableIndex].map(row => row.map(value => {
                        if (!value.marked) remainderSum += value.value;
                    }));
                    return remainderSum * pulledNumber;
                }
            }
        }
    }

    secondJob = (sourceTables, sourcePulledNumbers) => {
        let lastWinnerData;
        let numberOfWinnerTables = 0;
        for (const pulledNumber of sourcePulledNumbers) {
            for (let tableIndex = 0; tableIndex < sourceTables.length; tableIndex++) {
                for (let rowIndex = 0; rowIndex < sourceTables[tableIndex].length; rowIndex++) {
                    for (let valueIndex = 0; valueIndex < sourceTables[tableIndex][rowIndex].length; valueIndex++) {
                        if (
                            sourceTables[tableIndex][rowIndex][valueIndex].value === pulledNumber &&
                            sourceTables[tableIndex][rowIndex][valueIndex].marked === false
                        ) {
                            sourceTables[tableIndex][rowIndex][valueIndex].marked = true;
                        }
                    }
                }
                const isBingo = this.bingoHelper(sourceTables[tableIndex]);
                if (isBingo && numberOfWinnerTables < sourceTables.length) {
                    lastWinnerData = {tableIndex, pulledNumber};
                    numberOfWinnerTables++;
                    if (numberOfWinnerTables >= sourceTables.length) break;
                }
            }
            if (numberOfWinnerTables >= sourceTables.length) break;
        }
        let remainderSum = 0;
        sourceTables[lastWinnerData.tableIndex].map(row => row.map(value => {
            if (!value.marked) remainderSum += value.value;
        }));
        return remainderSum * lastWinnerData.pulledNumber;
    }

    bingoHelper = (table) => {
        for (let rowIndex = 0; rowIndex < table.length; rowIndex++) {
            const row = table[rowIndex];
            if (row.filter(value => value.marked).length === 5) return true;
        }
        for (let columnIndex = 0; columnIndex < table[0].length; columnIndex++) {
            const column = [
                table[0][columnIndex],
                table[1][columnIndex],
                table[2][columnIndex],
                table[3][columnIndex],
                table[4][columnIndex]
            ];
            if (column.filter(value => value.marked).length === 5) return true;
        }
        return false;
    }
}

export default Worker4;
