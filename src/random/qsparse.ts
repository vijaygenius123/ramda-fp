// @ts-nocheck
import {tail, compose, split, map, fromPairs} from "ramda";

const queryString = '?page=2&pageSize=10&total=100'

const parseQs = compose(fromPairs, map(split('=')), split('&'), tail)

const result = parseQs(queryString)

console.log(result)
