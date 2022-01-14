// @ts-nocheck
import {compose, fromPairs, zip, zipObj} from "ramda";

const getName = () => Promise.resolve('Vijay')
const getHobbies = () => new Promise((res) => {
    setTimeout(() => {
        res(['Football', 'Coding'])
    }, 1000)
})

Promise.all([getName(), getHobbies()])
    .then(zipObj(['name', 'hobbies']))
    .then(console.log)


Promise.all([getName(), getHobbies()])
    .then(compose(fromPairs,zip(['name', 'hobbies'])))
    .then(console.log)
