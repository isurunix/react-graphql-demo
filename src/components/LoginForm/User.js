import { createContext } from "react";
const UserContext = createContext({ currentUser: null, setCurrentUser: (currentUser) => { } });
export { UserContext };
