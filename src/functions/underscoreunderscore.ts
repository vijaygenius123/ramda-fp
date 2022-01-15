import {__, curry} from 'ramda'

const greet = curry((fName: string, lName: string, greeting: string) => `${greeting}, ${lName} ${fName}`)

const greetHello = greet(__, __, 'Hello')
console.log(greetHello('Vijay', 'S'))

