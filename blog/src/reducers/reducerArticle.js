import _ from "lodash"
const articles = [
    {id : 1 , titre : "premier article" , contenu : "lorem ipsum"}
] ;

export const reducerArticle = (state = articles , action) => {
    const cloneState = _.cloneDeep(state);
    switch( action.type ){
        case "ADD" : 
            cloneState.push(action.payload);
            return cloneState ; 
        case "SUPPRIMER" :
            return cloneState.filter(function(item){ 
                return item.id !== action.payload
            })
        default : 
            return state
    }
}
