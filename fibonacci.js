function fibs(sequenceLength) {
    if (!Number.isInteger(sequenceLength) || sequenceLength < 1) return [];

    let fPrevPrev = 0;
    let fPrev = 1;

    if (sequenceLength === 1) return [fPrevPrev];
    if (sequenceLength === 2) return [fPrevPrev, fPrev];

    let fibArray = [fPrevPrev, fPrev];

    for (let i = 2; i < sequenceLength; i++) {
        const fCurrent = fPrevPrev + fPrev;
        fibArray.push(fCurrent);

        fPrevPrev = fPrev;
        fPrev = fCurrent;
    }

    return fibArray;
}

function fibsRec(sequenceLength) {
    if (!Number.isInteger(sequenceLength) || sequenceLength < 1) return [];
    if (sequenceLength === 1) return [0];
    if (sequenceLength === 2) return [0, 1];

    const fibs = fibsRec(sequenceLength - 1);
    const nextFib = fibs[fibs.length - 1] + fibs[fibs.length - 2];

    fibs.push(nextFib);
    return fibs;
}

const sequenceLength = 8;
console.log('Fibonacci sequence:', fibs(sequenceLength));
console.log('Fibonacci sequence:', fibsRec(sequenceLength));