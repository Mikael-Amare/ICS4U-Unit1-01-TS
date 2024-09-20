/**
 * Finds how much logs a truck can carry if the max weight it can carry is 1100 kg and each log is 20 kg/m
 * By: Mikael Amare
 * Version: 1.0
 * Since: 2024-09-19
 */ 

import { createPrompt } from 'bun-promptx'

const length = createPrompt('Enter log length (m): ')
const maxLogsCarried = 1100 / (20 * parseFloat(length.value))

console.log(`A truck can carry ${maxLogsCarried} ${length.value} meter long logs.`)

console.log('\nDone.')

