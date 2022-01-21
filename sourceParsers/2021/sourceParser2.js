const sourceParser2 = (source) => source.split('\n').map(command => ({
    command: command.split(' ')[0],
    value: parseInt(command.split(' ')[1]),
}));

export default sourceParser2;
