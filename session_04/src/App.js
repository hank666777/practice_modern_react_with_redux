import './App.css'
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animal = ['bird', 'cat', 'dog', 'cow', 'horse', 'gator'];
  return animal[Math.floor(Math.random() * animal.length)];
}

console.log(getRandomAnimal());

function App() {
  // let [count, setCount] = useState(0);
  let [animals, setAnimals] = useState([]);

  const handleClick = () => {
    // modifies a piece of state!!!
    // animal.push(getRandomAnimal())
    setAnimals([...animals, getRandomAnimal()]);
  }

  const renderedAnimals = animals.map((animal, i) => {
    return <AnimalShow type={animal} key={i} />
  })
  return (
    <div className="app">
      <button onClick={handleClick} className="btn btn-primary">
        Add animal
      </button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  )
}

export default App;