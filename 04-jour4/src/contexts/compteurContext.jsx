
// #a #d
import {createContext , useReducer} from "react"

// #b 
export const CompteurContext = createContext() ;

// #c
export const CompteurContextProvider = (props) => {
    //#d 
    const [compteur, dispatch] = useReducer(reducer , 88)

    // #e #8
    return <CompteurContext.Provider value={{compteur: compteur , dispatch:dispatch}}>
        {props.children}
    </CompteurContext.Provider>
}

// # d
function reducer(state , action){
    switch(action.type){
        // #11 
        case "AJOUTER" : 
            return state + 1 ;
        default :
            return state ;
    }
}
