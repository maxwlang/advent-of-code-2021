const { expect } = require("chai")

const {task1, task2} = require('./index')

describe('Day Two', () => {
    it('should calculate the horizontal position and depth you would have after following the planned course, then multiply', async () => {
        const result = await task1()
        expect(result).to.equal(2039256)
    })

    it('should calculate the horizontal position and depth you would have after following the planned course using this new interpretation of the commands, then multiply', async () => {
        const result = await task2()
        expect(result).to.equal(1856459736)
    })
})