const fs = require('fs').promises

const task1 = async () => {
    let horizontal = 0
    let vertical = 0
    return await fs.readFile('./day-2/data.txt', 'utf-8')
        .then(data => data.split('\n'))
        .then(data => {
            data.forEach(action => {
                const keyword = action.split(' ')[0]
                const amount = +action.split(' ')[1]

                switch (keyword) {
                    case 'forward':
                        horizontal = horizontal + amount
                        break
                    
                    case 'down':
                        vertical = vertical + amount
                        break

                    case 'up':
                        vertical = vertical - amount
                }
            })
        })
        .then(() => {
            console.log('\t', {
                horizontal,
                vertical,
                total: horizontal * vertical
            })

            return horizontal * vertical
        })
}

const task2 = async () => {
    let aim = 0
    let depth = 0
    let horizontal = 0
    return await fs.readFile('./day-2/data.txt', 'utf-8')
        .then(data => data.split('\n'))
        .then(data => {
            data.forEach(action => {
                const keyword = action.split(' ')[0]
                const amount = +action.split(' ')[1]

                switch (keyword) {
                    case 'forward':
                        horizontal = horizontal + amount
                        depth = depth + (aim * amount)
                        break
                    
                    case 'down':
                        aim = aim + amount
                        break

                    case 'up':
                        aim = aim - amount
                }
            })
        })
        .then(() => {
            console.log('\t', {
                aim,
                depth,
                horizontal,
                total: horizontal * depth
            })

            return horizontal * depth
        })
}

module.exports = {
    task1,
    task2
}