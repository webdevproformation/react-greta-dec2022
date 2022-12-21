import { createContext , useReducer } from "react";

export const UserContext = createContext();

function reducer(state, action){
    switch(action.type){

        default : 
            return state ;
    }
}

export const UserContextProvider = (props) => {
    const [profil , dispatch] = useReducer(reducer , {login : "alain" , password : "123", logged : false})
    return <UserContext.Provider value={{profil : profil, dispatch:dispatch }}>
        {props.children}
    </UserContext.Provider>
}