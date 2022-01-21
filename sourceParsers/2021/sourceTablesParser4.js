const sourceTablesParser4 = (source) =>
    source.split(',\n')
        .map(box => box.split('\n')
            .map(boxRow => boxRow.split(' ')
                .filter(num => num !== '')
                .map(num => ({
                    value: parseInt(num, 10),
                    marked: false,
                }))
            ));

const sourcePulledNumbersParser4 = (source) =>
    source.split(',').map(num => parseInt(num, 10));

export { sourceTablesParser4, sourcePulledNumbersParser4 };
