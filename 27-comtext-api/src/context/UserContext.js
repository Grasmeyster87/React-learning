import { createContext } from "react";

let UserContext = createContext({
    userName: '',
    ChangeUserName: (x) => { UserContext.userName = x; }
});

export default UserContext;