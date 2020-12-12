const fs = require('fs')
const data = fs.readdirSync('./Capture')

const showKeys = () => {
    let cards = data.map(card => {
        return Object.keys(JSON.parse(fs.readFileSync(`./Capture/${card}`, 'utf8')))
    })
    console.log(new Set(cards.flat()))
}

const editKeys = () => {
    let cards = data.map(async card => {
        cardData = await JSON.parse(fs.readFileSync(`./Capture/${card}`, 'utf8'))
        if(cardData.hasOwnProperty('Character type')){
            cardData.character_type = card['Character type']
            delete cardData['Character type']
            fs.writeFileSync(`./Capture/${card}`, JSON.stringify(cardData))
        }
        return card
    })
    //console.log(new Set(Object.keys(cards.flat())))
}

const nomalizeKeys = () => {
    const keys =  {
        name:"",
  number:"",
  rarity:"",
  card_type:"",
  element:"",
  attack:"",
  set_name:"",
  effect:"",
  character_type:""

      
    }

    let  cards = data.map(async card => {
        cardData = await JSON.parse(fs.readFileSync(`./Capture/${card}`, 'utf8'))
        for (let key in keys) {
            if (!cardData.hasOwnProperty(key)) {
                cardData[key] = keys[key]
                console.log(cardData)

                fs.writeFileSync(`./Capture/${card}`, JSON.stringify(cardData))
            }
          }
    })

}
//showKeys()
//editKeys()
nomalizeKeys()