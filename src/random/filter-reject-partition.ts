// @ts-nocheck
import { filter, reject, partition, propEq} from "ramda";

const pets = [
    {name: 'Spike', type: 'dog'},
    {name: 'Mittens', type: 'cat'},
    {name: 'Rover', type: 'dog'},
    {name: 'Fluffy', type: 'cat'},
    {name: 'Fido', type: 'dog'}
]

const getDog = propEq('type', 'dog')

const onlyDogs = filter(getDog)(pets)
const onlyCats = reject(getDog)(pets)
const both = partition(getDog)(pets)

console.log(onlyDogs)
console.log(onlyCats)
console.log(both)
