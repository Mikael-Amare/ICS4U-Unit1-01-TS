/**
 * Finds how much logs a truck can carry if the max weight it can carry is 1100 kg and each log is 20 kg/m
 * By: Mikael Amare
 * Version: 1.0
 * Since: 2024-09-19
 */ 

import { createPrompt } from 'bun-promptx';

async function main() {
    const length = await createPrompt('Enter log length (m): ');
    const numValue = parseFloat(length);

    if (isNaN(numValue) || numValue <= 0) {
        console.log('Please enter a valid positive number for the log length.');
        return;
    }

    const maxLogsCarried = Math.floor(1100 / (20 * numValue));

    console.log(`A truck can carry ${maxLogsCarried} ${numValue} meter long logs.`);
    console.log('\nDone.');
}

main();
