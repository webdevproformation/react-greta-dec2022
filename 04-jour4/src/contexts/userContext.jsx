import { createContext , useReducer } from "react";
import cloneDeep from "lodash/cloneDeep"

export const UserContext = createContext();

function reducer(state, action){
    const cloneState = cloneDeep(state)
    switch(action.type){
        // ... cas de figure à gérer dans la fonction reductrice 
        case "CONNEXION" :
            if(
                cloneState.login === action.payload.login && 
                cloneState.password === action.payload.password
              ){
                return {...cloneState , logged : true}
            }
            return {...cloneState , message : "identifiants invalides"}
        case "DECONNEXION" :
            return { ...cloneState, logged : false }
        default : 
            return state ;
    }
}

export const UserContextProvider = (props) => {
    const [profil , dispatch] = useReducer(reducer , {login : "alain" , password : "123", logged : false})
    return <UserContext.Provider value={{profil : profil, dispatch:dispatch }}>
        { props.children }
    </UserContext.Provider>
}

// créer un composant Connexion 
// contient un formulaire avec 2 champs login et password 
// lorsque vous saisissez les 2 informations et soumettre => soumettre les informations au dispatch 
// du Provider 