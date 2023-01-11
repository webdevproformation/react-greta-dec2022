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
        default :
            return  state ;
    }
}