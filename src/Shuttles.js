let shuttles = []
for (let i = 0; i < 5; i++) {
  shuttles.push({ max: i+1, amount: 0, solution: null})
}

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