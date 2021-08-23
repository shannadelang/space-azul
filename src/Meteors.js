class Meteor {
  constructor(id) {
    this.id = id
    this.tiles = []
    this.selected = [] // tile positions that are selected, for removing?
  }

  set fillSlots(slotOptions) {
    for(let i = 0; i < 4 ; i++){
      let tile = new Tile(slotOptions[Math.floor(Math.random()*slotOptions.length)])
      this.tiles.push(tile)
    }
  }
}

function onClick (event) {
  let meteorId = event.path[1].attributes.id.nodeValue // get meteor array it is in
  let tileType = event.path[0].classList[1]
  meteorField.forEach(meteor => { // look for all tiles where tile.type == self.type, and set tile.selected = true
    if (meteor.id == meteorId) {
      meteor.tiles.forEach(tile => {
        tile.type == tileType ? tile.selected = true : tile.selected = false
        metoerSelection = true
      })
    } else {
      meteor.tiles.forEach(tile => { tile.selected = false })
    }
  })
  console.log(meteorField[meteorId])
}

let meteorSelection = false

// CREATE DOM OBJECTS
for(let i = 0; i < 5 ; i++){
  let myMeteor = new Meteor(i) // FIX: with random id?
  myMeteor.fillSlots = resouces
  meteorField.push(myMeteor)

  let meteorDiv = document.createElement('div')
  meteorDiv.classList.add('meteorStorage')
  meteorDiv.id = myMeteor.id
  meteorDiv.onclick = onClick
  
  myMeteor.tiles.forEach( tile => {
    let tileDiv = document.createElement('div');
    tileDiv.classList.add('tile', tile.type)
    meteorDiv.appendChild(tileDiv);
  })

  document.getElementById('space').appendChild(meteorDiv)
}