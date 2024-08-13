import UserContext from "../context/UserContext";
import { useContext } from "react";

function ChangeUser() {
    let { userName, ChangeUserName } = useContext(UserContext);

    let users = ['Vitaliy', 'Bogdan'];

    let element = (<>
        <label>
            Add Name: <input type="text" id="text1" placeholder="Ваше ім'я" />
            <button onClick={() => document.getElementById('text1').value = ''} >Очистить</button>
            <button onClick={() => users.push(document.getElementById('text1').value)} > Add User </button>
        </label >
        <button onClick={() => ChangeUserName(userName ? users[1] : users[0])}>
            Change user
        </button>)
    </>);

    return element;
}
export default ChangeUser;