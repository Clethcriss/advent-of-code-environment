class Worker2 {

    static firstJob = (source) => {
        let depth = 0;
        let horizontal = 0;
        source.forEach(command => {
            switch (command.command) {
                case 'forward':
                    horizontal += command.value;
                    break;
                case 'down':
                    depth += command.value;
                    break;
                case 'up':
                    depth -= command.value;
                    break;
                default:
                    break;
            }
        });
        return depth * horizontal;
    }

    static secondJob = (source) => {
        let aim = 0;
        let depth = 0;
        let horizontal = 0;
        source.forEach(command => {
            switch (command.command) {
                case 'forward':
                    horizontal += command.value;
                    depth += aim * command.value;
                    break;
                case 'down':
                    aim += command.value;
                    break;
                case 'up':
                    aim -= command.value;
                    break;
                default:
                    break;
            }
        });
        return depth * horizontal;
    }
}

export default Worker2;
