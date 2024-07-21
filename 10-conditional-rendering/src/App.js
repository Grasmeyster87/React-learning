import './App.css'
import './components/PetInfo'
import PetInfo from './components/PetInfo'

function App() {
  return <div className="App">
    <PetInfo animal="cat" age={4} hasPet={true} />
    <PetInfo animal="dog" age={12} hasPet={false} />
  </div>
}

export default App
