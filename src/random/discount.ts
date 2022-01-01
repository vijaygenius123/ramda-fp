// @ts-nocheck
import {curry, lensProp, map, over, ifElse, propEq} from "ramda";


const products = [
    {name: 'Jeans', price: 80, category: 'clothes'},
    {name: 'Cards', price: 5, category: 'games'},
    {name: 'iPhone', price: 649, category: 'electronics'},
    {name: 'Freakonomics', price: 30, category: 'books'}]

const pLens = lensProp('price')
const applyDiscount = curry((per, amt) => amt - (amt * per / 100))

const adjustPrice = ifElse(
    propEq('category', 'electronics'),
    over(pLens, applyDiscount(50)),
    over(pLens, applyDiscount(10))
)


const result = map(adjustPrice, products)
console.log(result)
