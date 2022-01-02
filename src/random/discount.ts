// @ts-nocheck
import {curry, lensProp, map, over, cond, propEq, T, identity} from "ramda";


const products = [
    {name: 'Jeans', price: 80, category: 'clothes'},
    {name: 'Cards', price: 5, category: 'games'},
    {name: 'iPhone', price: 649, category: 'electronics'},
    {name: 'Freakonomics', price: 30, category: 'books'}]

const pLens = lensProp('price')
const applyDiscount = curry((per, amt) => amt - (amt * per / 100))

const adjustPrice = cond([
        [propEq('category', 'electronics'), over(pLens, applyDiscount(50))],
        [propEq('category', 'games'), over(pLens, applyDiscount(10))],
        [T, identity]
    ]
)


const result = map(adjustPrice, products)
console.log(result)
