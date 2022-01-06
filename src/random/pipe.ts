// @ts-nocheck
import {head, pipe, prop, sort} from 'ramda'

// Get the team name with the highest score
const teams = [
    {name: 'Lions', score: 5},
    {name: 'Tigers', score: 4},
    {name: 'Bears', score: 6},
    {name: 'Monkeys', score: 2},
]

const sortByScoreDesc = sort((a,b) => b.score - a.score)
const teamName = prop('name')

const result = pipe(
    sortByScoreDesc,
    head,
    teamName
)(teams)

console.log(result)
