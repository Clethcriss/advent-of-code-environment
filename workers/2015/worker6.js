class Y2015Worker6 {
    static job1 = (source) => {
        const grid = Y2015Worker6.getGrid();
        source.forEach(command => {
           const leftUpCoordinates = command[1];
           const rightDownCoordinates = command[2];
           const action = command[0];
           for (let lineIndex = leftUpCoordinates[0]; lineIndex <= rightDownCoordinates[0]; lineIndex++) {
               for (let lineItem = leftUpCoordinates[1]; lineItem <= rightDownCoordinates[1]; lineItem++) {
                   switch (action) {
                       case 'on':
                           grid[lineIndex][lineItem] = 1;
                           break;
                       case 'off':
                           grid[lineIndex][lineItem] = 0;
                           break;
                       case 'toggle':
                           grid[lineIndex][lineItem] = grid[lineIndex][lineItem] === 1 ? 0 : 1;
                           break;
                       default:
                           break;
                   }
               }
           }
        });
        let result = 0;
        grid.forEach(line => line.forEach(item => result += item));
        return result;
    }

    static job2 = (source) => {
        const grid = Y2015Worker6.getGrid();
        source.forEach(command => {
            const leftUpCoordinates = command[1];
            const rightDownCoordinates = command[2];
            const action = command[0];
            for (let lineIndex = leftUpCoordinates[0]; lineIndex <= rightDownCoordinates[0]; lineIndex++) {
                for (let lineItem = leftUpCoordinates[1]; lineItem <= rightDownCoordinates[1]; lineItem++) {
                    switch (action) {
                        case 'on':
                            grid[lineIndex][lineItem] += 1;
                            break;
                        case 'off':
                            grid[lineIndex][lineItem] = grid[lineIndex][lineItem] - 1 <= 0 ? 0 : grid[lineIndex][lineItem] - 1;
                            break;
                        case 'toggle':
                            grid[lineIndex][lineItem] += 2;
                            break;
                        default:
                            break;
                    }
                }
            }
        });
        let result = 0;
        grid.forEach(line => line.forEach(item => result += item));
        return result;
    }

    static getGrid = () => {
        let grid = [];
        for (let i = 0; i < 1000; i++) {
            let street = [];
            for (let k = 0; k < 1000; k++) {
                street.push(0);
            }
            grid.push(street);
        }
        return grid;
    }
}

export default Y2015Worker6;
