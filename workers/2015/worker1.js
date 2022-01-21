class y2015worker1 {
    static y2015Worker1Job1 = (source) => {
        let floor = 0;
        for (let iterator = 0; iterator < source.length; iterator++) {
            floor = source[iterator] === '(' ? floor + 1 : floor - 1;
        }
        return floor;
    }

    static y2015Worker1Job2 = (source) => {
        let floor = 0;
        let index = 0;
        for (let iterator = 0; iterator < source.length; iterator++) {
            index = iterator + 1;
            floor = source[iterator] === '(' ? floor + 1 : floor - 1;
            if (floor < 0) break;
        }
        return index;
    }
}

export default y2015worker1;
