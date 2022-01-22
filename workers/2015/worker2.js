class Y2015Worker2 {
    static job1 = (source) => {
        let totalSqr = 0;
        source.forEach((line) => {
            const x = line[0];
            const y = line[1];
            const z = line[2];
            totalSqr += (2 * (x * y)) + (2 * (x * z)) + (2 * (y * z)) + Math.min(x * y, x * z, y * z);
        })
        return totalSqr;
    }

    static job2 = (source) => {
        let totalRibbon = 0;
        source.forEach((line) => {
            const x = line[0];
            const y = line[1];
            const z = line[2];
            const smallestDimensions = Y2015Worker2.getSmallestDimensions([x, y, z]);
            totalRibbon += (2 * smallestDimensions.first) + (2 * smallestDimensions.second) + (x * y * z);
        })
        return totalRibbon;
    }

    static getSmallestDimensions = ([x, y, z]) => {
        const metaObject = {
            xMy: {
                first: x,
                second: y,
                multi: x * y,
            },
            xMz: {
                first: x,
                second: z,
                multi: x * z,
            },
            yMz: {
                first: y,
                second: z,
                multi: y * z,
            }
        }
        const smallestMulti = Math.min(metaObject.xMy.multi, metaObject.xMz.multi, metaObject.yMz.multi);
        for (let key of Object.keys(metaObject)) {
            if (metaObject[key].multi === smallestMulti) return metaObject[key];
        }
    }
}

export default Y2015Worker2;
