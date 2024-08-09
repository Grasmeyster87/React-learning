import UserContext from "../context/UserContext";
import { useContext } from "react";

function ChangeUser() {
    const { userName, changeUserName } = useContext(UserContext);
    return (
        <button onClick={() => changeUserName(userName === 'Vitaliy' ? 'Alice' : 'Bogdan')}>Change user</button>
    );
}

export default ChangeUser;