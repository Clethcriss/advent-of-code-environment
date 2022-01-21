class Worker1 {

    static firstJob = (source) => {
        let counter = 0;
        for (let i = 0; i < source.length; i++) {
            if (i === 0) continue;
            else if (source[i] > source[i - 1]) {
                counter++;
            }
        }
        return counter;
    }

    static secondJob = (source) => {
        let prevValue;
        let counter = 0;
        for (let i = 2; i < source.length; i++) {
            const actualValue = source[i - 2] + source[i - 1] + source[i];
            if (i === 2) {
                prevValue = actualValue;
                continue;
            } else if (actualValue > prevValue) {
                counter++;
            }
            prevValue = actualValue;
        }
        return counter;
    }

}

export default Worker1;
