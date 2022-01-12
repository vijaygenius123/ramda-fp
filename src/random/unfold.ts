// @ts-nocheck

import {unfold, curry} from "ramda";

const throughN = curry((limit, inc, n) => n > 10? false : [ n , n + inc])
console.log(unfold(throughN(10, 2), 1))
