class Shuttle {
  constructor(max) {
    this.max = max
    this.tiles = []
  }

  set fillTiles(max) {
    for(let i = 0; i < max ; i++){
      let tile = new Tile(null)
      this.tiles.push(tile)
    }
  }

  onClick (event) {
    console.log(selectedResources, 'selected resources')
    let shuttleId = event.path[1].attributes.id.nodeValue 
    console.log(shuttles[shuttleId-1].tiles, 'shuttle')
    
    if (selectedResources.length > 0) {
      let shuttleId = event.path[1].attributes.id.nodeValue //  to find the array the clicked object is in
      let leftovers = selectedResources.slice() // copy to track the left-overs
      shuttles[shuttleId-1].tiles.forEach( (tile, index) => {
        console.log(selectedResources[index], 'resource of index '+index)
        if (tile.filled){
          minusStack.push(selectedResources[index])
        } else {
          tile.type = selectedResources[index].type
          tile.filled = true
          leftovers.shift()
        }
      }) // TODO: remove selected tiles from the meteor
      minusStack.push(...leftovers) // push leftovers in the overflow array
      
      console.log(leftovers, 'and leftovers')
      console.log(minusStack, 'minus tiles')
    }
  }
}

for (let i = 0; i < 5; i++) {
  shuttles.push(new Shuttle(i+1))
  shuttles[i].fillTiles = i+1
}

shuttles.forEach( item => {
  let div = document.createElement('div');
  div.classList.add('shuttleStorage')
  document.getElementById('shuttlesContainer').appendChild(div)
  for (let i = 0; i < item.max; i++){
    let storageUnit = document.createElement('div')
    div.id = item.max
    storageUnit.classList.add('tile')
    storageUnit.onclick = item.onClick
    div.appendChild(storageUnit)
  }
})