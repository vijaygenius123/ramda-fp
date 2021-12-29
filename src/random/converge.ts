const R = require('ramda')

interface Person {
    id: number,
    name: string,
    avatar?: string
}

const generateUrl = (id: number) => `https://img.socialnetwork.com/avatar/${id}.png`
const getUrlFromPerson = R.compose(generateUrl, R.propOr('default', 'id'))
const getUpdatedPerson = R.converge(R.assoc('avatar'), [getUrlFromPerson, R.identity])

const person: Person = {
    id: 1,
    name: 'Joe'
}

const result = getUpdatedPerson(person)
console.log(result)
