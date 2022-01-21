const sourceParser3 = (source) => source.split('\n').map(row => row.split('').map(chr => parseInt(chr)));

export default sourceParser3;
