const fs = require('fs')
const data = fs.readdirSync('./cards')
const sets = fs.readdirSync('./sets')
const { v4: uuid } = require('uuid')

const seperateCards = async () => {
    try {
        sets.map(async set => {
            set = fs.readFileSync(`./sets/${set}`, `utf8`)
            set = await JSON.parse(set)
            set.cards.map(async card => {
                card.set_name = set.set_name
                fs.writeFileSync(`./raw/${uuid()}.json`, await JSON.stringify(card))
            })
        })
    } catch (error) {
        console.log(error)
    }
}

seperateCards()
