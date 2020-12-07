const fs = require('fs')
const data = fs.readdirSync('./clow')

const showKeys = () => {
    let cards = data.map(card => {
        return Object.keys(JSON.parse(fs.readFileSync(`./clow/${card}`, 'utf8')))
    })
    console.log(new Set(cards.flat()))
}

const editKeys = () => {
    let cards = data.map(async card => {
        cardData = await JSON.parse(fs.readFileSync(`./clow/${card}`, 'utf8'))
        if(cardData.hasOwnProperty('Major Clow Spirit')){
            cardData.major_clow_spirit = card['Major Clow Spirit']
            delete cardData['Major Clow Spirit']
            fs.writeFileSync(`./clow/${card}`, JSON.stringify(cardData))
        }
        return card
    })
    //console.log(new Set(Object.keys(cards.flat())))
}

const nomalizeKeys = () => {
    const keys =  {
        name: "",
        number: "",
        rarity: "",
        card_type: "",
        element:"",
        set_name: "",
        major_clow_spirit: false
    }

    let  cards = data.map(async card => {
        cardData = await JSON.parse(fs.readFileSync(`./clow/${card}`, 'utf8'))
        for (let key in keys) {
            if (!cardData.hasOwnProperty(key)) {
                cardData[key] = keys[key]
                console.log(cardData)

                fs.writeFileSync(`./clow/${card}`, JSON.stringify(cardData))
            }
          }
    })

}
//showKeys()
//editKeys()
nomalizeKeys()