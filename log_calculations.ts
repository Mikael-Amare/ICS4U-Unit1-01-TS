/**
* The program calculates how many logs
* 	should be put on a truck.
*
* By: Mikael Amare
* Version: 1.0
* Since: 2024-09-18
*/

import { createPrompt } from 'bun-promptx'



const name = createPrompt('What is your name? ')

console.log(`Hey there ${String(name.value)}`)



const ageString = createPrompt('What is your age? ')

let ageNumber = parseInt(ageString.value)

ageNumber = ageNumber - 10

console.log(`Age is > ${ageNumber}`)



console.log('\nDone.')


