import { createContext } from "react";

let UserContext = createContext({
    userName: '',
    ChangeUserName: () => { }    
});

export default UserContext;