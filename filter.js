const fs = require('fs')
const data = fs.readdirSync('./raw')

const filter = async () => {
    try {
        data.map(async card => {
            let data = await JSON.parse(fs.readFileSync(`./raw/${card}`, 'utf8'))
            if (data.card_type && data.card_type === 'Strategy') {
                fs.renameSync(`./raw/${card}`, `./strategy/${card}`)
            }
        })
    } catch (error) {
        console.log(error)
    }
}

filter()