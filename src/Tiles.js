class Tile {
  constructor(type) {
    this.type = type // UI: if type is null, make gray
    this.filled = false // UI: if false, make transparent
    this.selected = false // UI: if true, give border
  }

  onClickMeteor(){
    // get meteor array it is in
    // look for all tyle where tile.type == self.type, and set tile.selected = true
    // set a global "meteorSelected" to true
  }

  onClickSave(){
    // if "meteorSelected" true
    //  get the save array it is in
    //  check if tiles.map(tile => tile.filled).length = 0 results to false
    //    replace the present tiles with the selected one's (how to remove the selected ones?)
    //    push leftovers in the overflow array
  }
}