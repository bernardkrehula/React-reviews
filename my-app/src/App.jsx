import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main'>
        <img src=''></img>
        <h3>Intern</h3>
        <div className='brackets'>
          <h2>&lt;</h2>
          <h2>&gt;</h2>
        </div>
      </div>
    </>
  )
}

export default App
