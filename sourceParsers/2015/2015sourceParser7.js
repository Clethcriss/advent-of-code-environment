
const y2015SourceParser7 = (source) =>
    source.split('\n')
        .map(line => {
            let tempObject = {
                operator: null,
                operatorValue: null,
                target: null,
                sources: [],
            };
            if (line.includes('RSHIFT') || line.includes('LSHIFT')) {
                const lineArray = line.split(' ');
                tempObject = {
                    operator: lineArray[1],
                    operatorValue: parseInt(lineArray[2]),
                    target: lineArray[4],
                    sources: [lineArray[0]]
                }
            } else if (line.includes('AND')) {
                const lineArray = line.split(' ');
                const operator = lineArray[0] === '1' ? 'ONE_AND' : 'AND';
                tempObject = {
                    operator,
                    operatorValue: null,
                    target: lineArray[4],
                    sources: [operator === 'ONE_AND' ? parseInt(lineArray[0]) : lineArray[0], lineArray[2]]
                }
            } else if (line.includes('OR')) {
                    const lineArray = line.split(' ');
                    tempObject = {
                        operator: lineArray[1],
                        operatorValue: null,
                        target: lineArray[4],
                        sources: [lineArray[0], lineArray[2]]
                    }
            } else if (line.includes('NOT')) {
                const lineArray = line.split(' ');
                tempObject = {
                    operator: lineArray[0],
                    operatorValue: null,
                    target: lineArray[3],
                    sources: [lineArray[1]]
                }
            } else {
                const lineArray = line.split(' ');
                const sourceIsNumber = lineArray[0].search(/[^A-Za-z\s]/) !== -1;
                tempObject = {
                    operator: sourceIsNumber ? 'GIVEN' : 'INHERIT',
                    operatorValue: sourceIsNumber ? parseInt(lineArray[0]) : lineArray[0],
                    target: lineArray[2],
                    sources: []
                }
            }
            return tempObject;
        });



export default y2015SourceParser7;
