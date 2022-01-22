class Y2015Worker3 {

    static job1 = (source) => {
        let metaObject = {
            x0y0: true
        };
        let houseCounter = 1;
        let x = 0;
        let y = 0;
        for (let i = 0; i < source.length; i++) {
            const direction = source[i];
            switch (direction) {
                case '^':
                    y++;
                    break;
                case 'v':
                    y--;
                    break;
                case '>':
                    x++;
                    break;
                case '<':
                    x--;
                    break;
                default:
                    console.log('meh!');
            }
            if (!metaObject[`x${x}y${y}`])  {
                metaObject[`x${x}y${y}`] = true;
                houseCounter++;
            } else {
                console.log(`metaObject[x${x}y${y}]: `, metaObject[`x${x}y${y}`]);
            }

        }
        console.log('Object.keys(metaObject).length: ', Object.keys(metaObject).length);
        return houseCounter;
    }

    static job2 = (source) => {
        let metaObject = {
            x0y0: true
        };
        let houseCounter = 1;
        let cordinates = {
            santa: {
                x: 0,
                y: 0,
            },
            robo: {
                x: 0,
                y: 0,
            }
        }
        for (let i = 0; i < source.length; i++) {
            const direction = source[i];
            const person = i % 2 === 0 ? 'santa' : 'robo';
            switch (direction) {
                case '^':
                    cordinates[person].y++;
                    break;
                case 'v':
                    cordinates[person].y--;
                    break;
                case '>':
                    cordinates[person].x++;
                    break;
                case '<':
                    cordinates[person].x--;
                    break;
                default:
                    console.log('meh!');
            }
            if (!metaObject[`x${cordinates[person].x}y${cordinates[person].y}`])  {
                metaObject[`x${cordinates[person].x}y${cordinates[person].y}`] = true;
                houseCounter++;
            }
        }
        return houseCounter;
    }
}

export default Y2015Worker3;
