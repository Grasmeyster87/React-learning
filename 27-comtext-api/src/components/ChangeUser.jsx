import UserContext from "../context/UserContext";
import { useContext } from "react";
import { useState } from 'react';

function ChangeUser() {
    let { userName, ChangeUserName } = useContext(UserContext);

    let [...users] = useState(['Vitaliy', 'Bogdan', 'Uriy']);
    let [Number, setNumber] = useState(0);
    //console.log(users[0]);

    //console.log(Number);
    let element = (<>
        <label>
            Add Name: <input type="text" id="text1" placeholder="Ваше ім'я" />
            <button onClick={() => document.getElementById('text1').value = ''} >Очистить</button>
            <button onClick={() => users[0].push(document.getElementById('text1').value)} > Add User </button>
        </label >
        <button onClick={() => {             
            setNumber(Number + 1);
            ChangeUserName(users[0][Number]);           
        }}>
            Change user
        </button>
    </>);
    return element;
}
export default ChangeUser;