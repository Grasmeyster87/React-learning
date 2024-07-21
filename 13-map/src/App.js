import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'

const texts = [
  'Click me',
  'Click me please',
  'Hit me',
  'Presee me',
  'Click me again',
  'Presee me!!!',
]

function App() {
  console.log('App rendered')
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
    //console.log(count)
  }

  return <div className="App">
    <Counter count={count} />
    {texts.map((text, index) => {
      console.log(index)
      return <Button onClick={incrementCount} text={text} key={index} />
    })}
    {/* <Button text={texts[0]} onClick={incrementCount} />
    <Button text={texts[1]} onClick={incrementCount} />
    <Button text={texts[2]} onClick={incrementCount} />
    <Button text={texts[3]} onClick={incrementCount} /> */}
  </div>
}

export default App
