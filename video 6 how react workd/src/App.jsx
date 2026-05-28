import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>this is the counter for react app</p>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment </button>
      <button onClick={() => setCount(count - 1)}>decrement </button>
    </>
  )
}


export default App