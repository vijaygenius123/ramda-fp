// @ts-nocheck
import {compose, converge, descend, equals, head, identity, sort} from 'ramda'

const shouldBeTrue: number[] = [5, 4, 3, 2, 1]
const shouldBeFalse: number[] = [1, 2, 3, 4, 5]


const isFirstBiggest = converge(
    equals, [
        head,
        compose(head, sort(descend(identity)))
    ])

console.log(isFirstBiggest(shouldBeTrue))
console.log(isFirstBiggest(shouldBeFalse))
