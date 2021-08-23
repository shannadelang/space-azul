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
}

for (let i = 0; i < 5; i++) {
  shuttles.push(new Shuttle(i+1))
  shuttles[i].fillTiles = i+1
}

console.log(shuttles)

shuttles.forEach( item => {
  let div = document.createElement('div');
  div.classList.add('shuttleStorage')
  document.getElementById('shuttlesContainer').appendChild(div);
  for (let i = 0; i < item.max; i++){
    let storageUnit = document.createElement('div');
    storageUnit.classList.add('tile')
    div.appendChild(storageUnit);
  }
});