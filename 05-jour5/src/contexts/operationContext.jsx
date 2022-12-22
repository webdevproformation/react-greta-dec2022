import  cloneDeep  from "lodash/cloneDeep" // 16
// 11
import { createContext , useReducer } from "react" // a // e

// b 
export const OperationContext = createContext() ;

// c 
export const OperationContextProvider = (props) => {
    const data = [ // e
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
                id : Math.random() + "",
                nom : action.payload.nom ,
                montant : action.payload.montant,
                status : false
            }
            cloneState.push(operation)
            return cloneState; 
        case "SUPPR" : // 17
            return cloneState.filter( function (item) {
                return item.id !== action.payload
            } )
        case "MODIF" : // 18
            return cloneState.map( function (item) {
                if(item.id === action.payload) return {...item , status : !item.status}
                return item
            } )
        case "VALIDER" : // 19
            return cloneState.map( function (item) {
                if(item.id === action.payload.id) return { ...action.payload , montant: parseInt(action.payload.montant),  status : !item.status}
                return item
            } )
        default :
            return state 
    }
}