const { expect } = require("chai")

const {task1, task2} = require('./index')

describe('Day One', () => {
    it('should count the number of times a depth measurement increases from the previous measurement', async () => {
        const result = await task1()
        expect(result).to.equal(1288)
    })

    it('should count the number of times the sum of measurements in this sliding window increases', async () => {
        const result = await task2()
        expect(result).to.equal(1311)
    })
})