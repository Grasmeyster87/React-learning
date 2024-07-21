import './App.css'
import './components/PetInfo'
import PetInfo from './components/PetInfo'

function App() {
  return <div className="App">
    <PetInfo animal="cat" age={4} />
    <PetInfo animal="dog" age={12} />
  </div>
}

export default App
