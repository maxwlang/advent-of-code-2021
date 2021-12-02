const fs = require('fs').promises
const task1 = async (log = false) => {
    let last = null
    let increases = 0
    let decreases = 0
    let same = 0
    let total = 0

    return await fs.readFile('./day-1/data.txt', 'utf-8')
        .then(data => data.split('\n'))
        .then(data => {
            total = data.length
            return data
        })
        .then(data => data.forEach((number, index) => {
            if (number > last || index === 0) increases++
            if (number < last) decreases++
            if (number === last) same++
            last = number
            return
        }))
        .then(() => {
            console.log(`\tIncreases: ${increases}; Decreases: ${decreases}; Same: ${same}; Total: ${total}`)
            return increases
        })
}

const task2 = async (log = false) => {
    let last = null
    let increases = 0
    let decreases = 0
    let same = 0
    let total = 0
    let startingIndex = 0
    let windowSize = 3

    return await fs.readFile('./day-1/data.txt', 'utf-8')
        .then(data => data.split('\n'))
        .then(data => data.map((n, i, array) => {
            let window = array.slice(startingIndex, startingIndex + windowSize)
            window = window.map(num => num !== '' ? +num : null)

            startingIndex++
            if (window.length < 3 || window[2] === null) return null
            return window
        }))
        .then(data => data.filter(data => data !== null))
        .then(data => data.map(window => window.reduce((p, c) => p + c)))
        .then(data => {
            total = data.length
            return data
        })
        .then(data => data.forEach((number, index) => {
            if (index === 0) return
            if (number > last) increases++
            if (number < last) decreases++
            if (number === last) same++
            return last = number
        }))
        .then(() => {
            console.log(`\tIncreases: ${increases}; Decreases: ${decreases}; Same: ${same}; Total: ${total}`)
            return increases
        })
}

module.exports = {task1, task2}