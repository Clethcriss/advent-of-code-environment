import * as crypto from "crypto";

class Y2015Worker4 {
    static job1 = (source) => {
        for (let i = 0; ; i++) {
            const hash = crypto.createHash('md5').update(`${source}${i}`).digest('hex');
            if (hash.slice(0, 5) === '00000') {
                return i;
            }
        }
    }

    static job2 = (source) => {
        for (let i = 0; ; i++) {
            const hash = crypto.createHash('md5').update(`${source}${i}`).digest('hex');
            if (hash.slice(0, 6) === '000000') {
                return i;
            }
        }
    }
}

export default Y2015Worker4;
