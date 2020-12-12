const yaml = require('yaml')
const fs = require('fs')
const cards = fs.readdirSync('./Capture')

const yamlConvert = () => {
    cards.map(async card => {
        let cardData = await JSON.parse(fs.readFileSync(`./Capture/${card}`, `utf-8`))
        let cardDataYml = await yaml.stringify(cardData)
        fs.writeFileSync(`./cards/${cardData.number}.yml`, cardDataYml)
    })
}
yamlConvert()