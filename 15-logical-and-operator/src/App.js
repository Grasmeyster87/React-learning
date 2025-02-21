import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'
import { Reset, buttonStyle } from './components/Reset'

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }
  const resetCount = () => {
    setCount(0)
  }
  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Reset count={count} onClick={resetCount} />
    </div>
  )
}

export default App