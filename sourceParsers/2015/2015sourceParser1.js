const y2015SourceParser1 = (source) => source.split('\n').map(line => line.split('x').map(dimension => parseInt(dimension)));

export default y2015SourceParser1;
