class Worker3 {
    firstJob = (source) => {
        const gammaRate = [];
        const epsilonRate = [];

        if (source && source.length > 0) {
            for (let i = 0; i < source[0].length; i++) {
                const rateIndexValues = this._gammaAndEpsilonRateHelper(source, i);
                gammaRate.push(rateIndexValues.gamma);
                epsilonRate.push(rateIndexValues.epsilon);
            }
        }

        const parsedGamma = parseInt(gammaRate.join(''), 2);
        const parsedEpsilon = parseInt(epsilonRate.join(''), 2);

        return parsedGamma * parsedEpsilon;
    }

    secondJob = (source) => {
        const indexLimit = source[0].length;
        let oxyRawRate = this._getOxyRawRate(source, indexLimit, 'oxygen');
        let coRawRate = this._getOxyRawRate(source, indexLimit, 'carbonDiOxid');

        const parsedOxyRate = parseInt(oxyRawRate, 2);
        const parsedCoRate = parseInt(coRawRate, 2);

        return parsedCoRate * parsedOxyRate;
    }

    _getOxyRawRate = (source, indexLimit, type) => {
        let index = 0;
        let filteredSource = [...source];
        while (filteredSource.length > 1 && index < indexLimit) {
            let zero = 0;
            let one = 0;
            for (let i = 0; i < filteredSource.length; i++) {
                if (filteredSource[i][index] === 0) {
                    zero++;
                } else {
                    one++;
                }
            }
            if (type === 'oxygen') {
                const criteriaValue = one >= zero ? 1 : 0;
                filteredSource = filteredSource.filter(row => row[index] === criteriaValue);
            } else {
                const criteriaValue = zero <= one ? 0 : 1;
                filteredSource = filteredSource.filter(row => row[index] === criteriaValue);
            }

            index++;
        }
        return filteredSource[0].join('');
    }

    _gammaAndEpsilonRateHelper = (source, index) => {
        let zero = 0;
        let one = 0;
        for (let i = 0; i < source.length; i++) {
            if (source[i][index] === 1) {
                one++;
            } else {
                zero++;
            }
        }

        return {
            gamma: zero > one ? 0 : 1,
            epsilon: zero < one ? 0 : 1,
        }
    }
}

export default Worker3;
