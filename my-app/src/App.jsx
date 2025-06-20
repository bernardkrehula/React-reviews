import { useState } from 'react'
import './App.css'
import people from './people';

function App() {
  const [index, setIndex] = useState(0);

  const person = people[index];

  const {id, name, lastName, job, info, image } = person;

  const handleNext = () => {
    setIndex(prevIndex => (prevIndex + 1) % people.length);
  }
  const handlePrevious = () => {
    setIndex(prevIndex => {
      if(prevIndex === 0){
        return people.length - 1;
      }
      else {
        return prevIndex -= 1;
      }
    });
  }

  const handleRandom = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    while (randomIndex === index) {
      randomIndex = Math.floor(Math.random() * people.length);
    }
    setIndex(randomIndex);
  }

      return(
      <div className='main' key={id}>
        <img src={image}></img>
        <h1>{name} {lastName}</h1>
        <h3>{job}</h3>
        <h4>{info}</h4>
        <div className='brackets'>
          <svg onClick={handlePrevious} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
          <svg onClick={handleNext} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
        </div>
        <button onClick={handleRandom}>Suprise Me</button>
      </div>
    )
}

export default App;
