import _ from "lodash"

const user = { // closure 
    nom : "Alain",
    login : "azerty",
    password : "123456",
    isLogged : false 
}

export const reducerUser = (state = user , action) => {
    const cloneState = _.cloneDeep(state);
    switch(action.type){
        case "USER_LOGIN" :
            const {login , password} = cloneState
            if(login === action.payload.login && password === action.payload.password){
                return {...cloneState, isLogged : true, erreur : ""}
            }
            return {...cloneState , erreur : "identifiants invalides"}
        case "USER_LOGOUT" :
            return {...cloneState, isLogged : false}
        default :
            return  state ;
    }
}