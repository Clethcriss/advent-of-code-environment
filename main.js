// 2015 Source imports
import y2015source1 from "./sources/2015/2015s1.js";
import y2015source2 from "./sources/2015/2015s2.js";

// 2021 Source imports
import source1 from './sources/2021/source1.js';
import source2 from './sources/2021/source2.js';
import source3 from './sources/2021/source3.js';
import { sourceTables4, sourcePulledNumbers4 } from './sources/2021/sourceTables4.js';

// 2015 Worker imports
import y2015worker1 from "./workers/2015/worker1.js";

// 2021 Worker imports
import Worker1 from './workers/2021/worker1.js';
import Worker2 from './workers/2021/worker2.js';
import Worker3 from './workers/2021/worker3.js';
import Worker4 from './workers/2021/worker4.js';

// 2015 Parser imports
import y2015SourceParser1 from "./sourceParsers/2015/2015sourceParser1.js";

// 2021 Parser imports
import sourceParser1 from "./sourceParsers/2021/sourceParser1.js";
import sourceParser2 from "./sourceParsers/2021/sourceParser2.js";
import sourceParser3 from "./sourceParsers/2021/sourceParser3.js";
import { sourceTablesParser4, sourcePulledNumbersParser4 } from "./sourceParsers/2021/sourceTablesParser4.js";
// Util imports
import applyArrayEqualityChecker from "./utils/arrayEqual.js";


// Apply utils
applyArrayEqualityChecker();

// 2021
const y2021solutions = () => {
    const parsedSource1 = sourceParser1(source1);
    const parsedSource2 = sourceParser2(source2);
    const parsedSource3 = sourceParser3(source3);
    const parsedTablesSource4 = sourceTablesParser4(sourceTables4);
    const parsedPulledNumbersSource4 = sourcePulledNumbersParser4(sourcePulledNumbers4)

    // 1. Assignment
    const assignment1Part1 = Worker1.firstJob(parsedSource1);
    const assignment1Part2 = Worker1.secondJob(parsedSource1);

    // 2. Assignment
    const assignment2Part1 = Worker2.firstJob(parsedSource2);
    const assignment2Part2 = Worker2.secondJob(parsedSource2);

    // 3. Assignment
    const worker3 = new Worker3();
    const assignment3Part1 = worker3.firstJob(parsedSource3);
    const assignment3Part2 = worker3.secondJob(parsedSource3);

    // 4. Assignment
    const worker4 = new Worker4();
    const assignment4Part1 = worker4.firstJob(parsedTablesSource4, parsedPulledNumbersSource4);
    const assignment4Part2 = worker4.secondJob(parsedTablesSource4, parsedPulledNumbersSource4);
}



// 2015
const y2015solutions = () => {
    const parsedSource2 = y2015SourceParser1(y2015source2);

    const solution1 = () => {
        console.group('Assignment 1');
            const assignment1part1 = y2015worker1.y2015Worker1Job1(y2015source1);
            const assignment1part2 = y2015worker1.y2015Worker1Job2(y2015source1);

            console.log('assignment1part1: ', assignment1part1);
            console.log('assignment1part2: ', assignment1part2);
        console.groupEnd();
        console.log('\n');
    }

    const solution2 = () => {
        console.group('Assignment 2');
            console.log('parsedSource2: ', parsedSource2);
        console.groupEnd();
        console.log('\n');
    }

    // solution1();
    solution2();
}

y2015solutions();




