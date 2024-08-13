import { useState } from 'react';
import UserContext from './context/UserContext';
import './App.css';
import User from './components/User';
import ChangeUser from './components/ChangeUser';

function App() {
  let [user, setUser] = useState('');
  return (
    <UserContext.Provider value={{ userName: user, ChangeUserName: setUser }}>
      <div className="App">
        <User />
        <ChangeUser />
      </div>
    </UserContext.Provider>
  );
}

export default App;
