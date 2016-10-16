/* @flow */

import {a} from './a';
const nsTime = (hrtime) => hrtime[0] * 1e9 + hrtime[1];

const start = process.hrtime();

a();

let end = process.hrtime(start)

console.info(`${process.argv[2]} execution time (hr): ${nsTime(end)}ms`);
