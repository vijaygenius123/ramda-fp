// @ts-nocheck
import {evolve, multiply, toUpper, inc} from "ramda";

const product = {
    name: 'cog',
    price: 100,
    details: {
        shippingInfo: {
            weight: 7,
            method: 'ups'
        }
    }
}

const adjustProduct = evolve({
    name: toUpper,
    price: multiply(2),
    details: {
        shippingInfo: {
            weight: inc
        }
    }
})

const result = adjustProduct(product)
console.log(result)
