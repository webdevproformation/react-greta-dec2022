import { createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {

    return <UserContext.Provider>
        {props.children}
    </UserContext.Provider>
}