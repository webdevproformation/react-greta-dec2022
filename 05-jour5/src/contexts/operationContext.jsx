import  cloneDeep  from "lodash/cloneDeep" // 16
// 11
import { createContext , useReducer } from "react" // a // e

// b 
export const OperationContext = createContext() ;

// c 
export const OperationContextProvider = (props) => {
    
    const data = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [ // e
        {id : 1 , nom : "billet" , montant : -500, status : true} ,
        {id : 2 , nom : "salaire" , montant : 700, status : false}    
    ]

    const [operation , dispatch] = useReducer(reducer, data) //e

    return <OperationContext.Provider value={{operation : operation , dispatch: dispatch }}> {/** f */}
        {props.children}
    </OperationContext.Provider>
}

function reducer(state, action){ // d 
    const cloneState = cloneDeep(state)
    switch(action.type){
        case "ADD" : // #16
            const operation = {
                //id : Math.random() + "",
                id : cloneState[cloneState.length -1].id  + 1,
                nom : action.payload.nom ,
                montant : action.payload.montant,
                status : false
            }
            cloneState.push(operation)
            localStorage.setItem("data" , JSON.stringify(cloneState))
            return cloneState; 
        case "SUPPR" : // 17
            const modif = cloneState.filter( function (item) {
                return item.id !== action.payload
            } )
            localStorage.setItem("data" , JSON.stringify(modif))
            return modif
        case "MODIF" : // 18
            return cloneState.map( function (item) {
                if(item.id === action.payload) return {...item , status : !item.status}
                return item
            } )
        case "VALIDER" : // 19
            const modif3 = cloneState.map( function (item) {
                if(item.id === action.payload.id) return { ...action.payload , montant: parseInt(action.payload.montant),  status : !item.status}
                return item
            } )
            localStorage.setItem("data" , JSON.stringify(modif3))
            return modif3 
        default :
            return state 
    }
}