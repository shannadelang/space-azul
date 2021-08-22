let planets = []
let solarSystem = []
const solutions = [
  {solution:'cities', solved: false},
  {solution:'energy', solved: false},
  {solution:'food', solved: false},
  {solution:'population', solved: false},
  {solution:'nature', solved: false}]

for (let i = 0; i < solutions.length; i++) {
  for (let i = 0; i < solutions.length; i++) {
    planets.push(solutions[i])
  }
  solarSystem.push(planets)
  const temp = solutions.splice(0,1) // rotate the solutions
  solutions.push(temp[0])
  planets = [] // reset planet
}

console.log(solarSystem, 'solar')

solarSystem.forEach( planet => {
  let div = document.createElement('div');
  div.classList.add('planetSlots')
  document.getElementById('planetsContainer').appendChild(div);
  planet.forEach( solution => {
    let storageUnit = document.createElement('div');
    storageUnit.classList.add('tile', solution.solution)
    storageUnit.style.opacity = 0.5
    div.appendChild(storageUnit);
  })
});