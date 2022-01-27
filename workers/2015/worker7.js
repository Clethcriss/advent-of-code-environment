class Y2015Worker7 {
    static job1 = (source) => {
        const mapObject = {
            one1: new Noodlie()
        };
        mapObject['one1'].firstParent = null;
        mapObject['one1'].secondParent = null;
        mapObject['one1'].operatorValue = null;
        mapObject['one1'].operator = 'GIVEN';
        mapObject['one1'].value = 1;
        source.forEach(metaObject => {
           if (mapObject[metaObject.target] === undefined) {
               mapObject[metaObject.target] = new Noodlie();
           }
           switch (metaObject.operator) {
               case 'AND':
               case 'OR':
                   if (!mapObject[metaObject.sources[0]]) mapObject[metaObject.sources[0]] = new Noodlie();
                   if (!mapObject[metaObject.sources[1]]) mapObject[metaObject.sources[1]] = new Noodlie();
                   mapObject[metaObject.target].firstParent = mapObject[metaObject.sources[0]];
                   mapObject[metaObject.target].secondParent = mapObject[metaObject.sources[1]];
                   mapObject[metaObject.target].operator = metaObject.operator;
                   mapObject[metaObject.target].operatorValue = null;
                   mapObject[metaObject.target].value = null;
                   break;
               case 'NOT':
                   if (!mapObject[metaObject.sources[0]]) mapObject[metaObject.sources[0]] = new Noodlie();
                   mapObject[metaObject.target].firstParent = mapObject[metaObject.sources[0]];
                   mapObject[metaObject.target].secondParent = null;
                   mapObject[metaObject.target].operator = metaObject.operator;
                   mapObject[metaObject.target].operatorValue = null;
                   mapObject[metaObject.target].value = null;
                   break;
               case 'GIVEN':
                   mapObject[metaObject.target].firstParent = null;
                   mapObject[metaObject.target].secondParent = null;
                   mapObject[metaObject.target].operator = metaObject.operator;
                   mapObject[metaObject.target].operatorValue = null;
                   mapObject[metaObject.target].value = metaObject.value;
                   break;
               case 'INHERIT':
                   if (!mapObject[metaObject.sources[0]]) mapObject[metaObject.sources[0]] = new Noodlie();
                   mapObject[metaObject.target].firstParent = mapObject[metaObject.sources[0]];
                   mapObject[metaObject.target].secondParent = null;
                   mapObject[metaObject.target].operator = metaObject.operator;
                   mapObject[metaObject.target].operatorValue = null;
                   mapObject[metaObject.target].value = null;
                   break;
               case 'ONE_AND':
                   mapObject[metaObject.target].firstParent = mapObject['one1'];
                   mapObject[metaObject.target].secondParent = null;
                   mapObject[metaObject.target].operator = metaObject.operator;
                   mapObject[metaObject.target].operatorValue = null;
                   mapObject[metaObject.target].value = null;
                   break;
               case 'LSHIFT':
               case 'RSHIFT':
                   if (!mapObject[metaObject.sources[0]]) mapObject[metaObject.sources[0]] = new Noodlie();
                   mapObject[metaObject.target].firstParent = mapObject[metaObject.sources[0]];
                   mapObject[metaObject.target].secondParent = null;
                   mapObject[metaObject.target].operator = metaObject.operator;
                   mapObject[metaObject.target].operatorValue = metaObject.operatorValue;
                   mapObject[metaObject.target].value = null;
               break;
           }
        });
        mapObject['a'].getValue();
        return '';
    }
}

class Noodlie {
    value;
    operator;
    operatorValue;
    firstParent;
    secondParent;

    getValue = () => {
        if (this.value === null || this.value === undefined) {
            switch (this.operator) {
                case 'ONE_AND':
                case 'INHERIT':
                    this.value = this.firstParent.getValue();
                    console.log('this.firstParent: ', this.firstParent);
                    break;
                case 'AND':
                    this.value = this.firstParent.getValue() & this.secondParent.getValue();
                    break;
                case 'OR':
                    this.value = this.firstParent.getValue() | this.secondParent.getValue();
                    console.log('this.value: ', this.value);
                    break;
                case 'NOT':
                    this.value = ~this.firstParent.getValue();
                    break;
                case 'RSHIFT':
                    this.value = this.firstParent.getValue() >> this.operatorValue;
                    break;
                case 'LSHIFT':
                    this.value = this.firstParent.getValue() << this.operatorValue;
                    break;

            }
        }
        return this.value;
    }
}

export default Y2015Worker7;
