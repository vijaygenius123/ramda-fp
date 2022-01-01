import {map, pick} from "ramda";

const products = [
    {name: 'Jeans', price: 80, category: 'clothes'},
    {name: 'Hoodie', price: 60, category: 'clothes'},
    {name: 'Jacket', price: 120, category: 'clothes'},
    {name: 'Cards', price: 35, category: 'games'},
    {name: 'iPhone', price: 649, category: 'electronics'},
    {name: 'Sauce Pan', price: 100, category: 'housewares'}
]

const getNameAndPrice = map(pick(['name', 'price']))
const result = getNameAndPrice(products)
console.log(result)
