// @ts-nocheck
import {lensProp, set, over, toUpper, values, map, compose} from "ramda";

const person = {
    firstName: 'Ironman',
    lastName: 'Stark'
}

//const fLens = lens(prop('firstName'), assoc('firstName'))
const fLens = lensProp('firstName')
//const result = view(fLens, person)
const result = set(fLens, 'Tony', person)

console.log(person)
console.log(result)
console.log(over(fLens, toUpper)(result))
console.log(compose(map(toUpper), values)(result))

