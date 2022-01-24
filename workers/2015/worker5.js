class Y2015Worker5 {
    static job1 = (source) => {
        let numberOfNiceStrings = 0;
        source.forEach(str => {
            const vowels = 'aeiou';
            let vowelsNumber = 0;
            const badPairs = ['ab', 'cd', 'pq', 'xy']
            let doubleChar = false;
            let serialChars = false;
            for (let i = 0; i < str.length; i++) {
                if (vowels.includes(str[i])) {
                    vowelsNumber++;
                }
                if (i + 1 < str.length && str[i] === str[i + 1]) {
                    doubleChar = true;
                } else if (i + 1 < str.length && badPairs.includes(`${str[i]}${str[i + 1]}`)) {
                    console.log(`${str[i]}${str[i + 1]}`);
                    serialChars = true;
                    break;
                }
            }
            if (vowelsNumber >= 3 && doubleChar && !serialChars) {
                numberOfNiceStrings++;
            }
        });

        return numberOfNiceStrings;
    }

    static job2 = (source) => {
        let numberOfNiceStrings = 0;
        source.forEach(str => {
            let bridgeChar = false;
            let doublePair = false;
            for (let i = 0; i < str.length; i++) {
                if (i + 3 < str.length) {
                    for (let k = i + 2; k < str.length; k++) {
                        if (k + 1 < str.length && `${str[i]}${str[i + 1]}` === `${str[k]}${str[k + 1]}`) {
                            doublePair = true;
                        }
                    }
                }
                if (i + 2 < str.length && str[i] === str[i + 2]) {
                    bridgeChar = true;
                }
            }
            if (bridgeChar && doublePair) numberOfNiceStrings++;
        });
        return numberOfNiceStrings;
    }
}

export default Y2015Worker5;
