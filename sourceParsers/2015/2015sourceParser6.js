const y2015SourceParser6 = (source) =>
    source.split('\n')
        .map(line =>
            line.split(' ')
                .filter(word => word !== 'turn' && word !== 'through')
                .map((wordItem, index) => index !== 0 ?
                    wordItem.split(',')
                        .map(wordItemNumber => parseInt(wordItemNumber))
                    : wordItem));

export default y2015SourceParser6;
