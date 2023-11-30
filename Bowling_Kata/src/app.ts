"use strict";
let rolls = [];
let score = 0;

export function calcScore(rolls: number[]) {
    let score = 0;
    let frame = 1;
    let rollIndex = 0;

    while (frame <= 10) {
        // Strike roll
        if (rolls[rollIndex] === 10) {
            score += 10 + (rolls[rollIndex + 1] || 0) + (rolls[rollIndex + 2] || 0);
            rollIndex += 1;
        }
        // Spare roll
        else if (rolls[rollIndex] + (rolls[rollIndex + 1] || 0) === 10) {
            score += 10 + (rolls[rollIndex + 2] || 0);
            rollIndex += 2;
        }
        // Normal roll
        else {
            score += (rolls[rollIndex] || 0) + (rolls[rollIndex + 1] || 0);
            rollIndex += 2;
        }

        frame += 1;
    }

    return score;
}

rolls = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
score = calcScore(rolls);

console.log("Final Bowling Score:", score);
console.log(typeof score);

