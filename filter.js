const fs = require('fs')
const data = fs.readdirSync('./cards')
const { v4: uuid } = require('uuid')

const filter = async () => {
    try {
        data.map(async card => {
            let data = await JSON.parse(fs.readFileSync(`./cards/${card}`, 'utf8'))
            if (data.card_type && data.card_type === 'Clow') {
                fs.renameSync(`./cards/${card}`, `./cards/clow/${card}`)
            }
        })
    } catch (error) {
        console.log(error)
    }
}

filter()