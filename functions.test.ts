const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    let testArr = [9, 5, 29, 0, 999, -4.5];
    let shuffledArr = shuffleArray(testArr);

    test('check that shuffleArray returns an array', () => {
        expect(Array.isArray(testArr)).toBe(true);
    })

    test('check that shuffleArray returns the same items passed in', () => {
        for (let i = 0; i < testArr.length; i++){
            expect(shuffledArr.includes(testArr[i])).toBe(true);
        }
    })
})