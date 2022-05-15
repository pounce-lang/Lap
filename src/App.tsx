import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Chat } from './Discourse'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>lap - to drink like a cat</h1>
      <p>
        Or to follow along with "The Little Typer" (in Pounce). 
        Adding simple typing to the language 
        (no dependant types at first :).
      </p>
      <Chat />
    </div>
  )
}

export default App
