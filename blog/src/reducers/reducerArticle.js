import _ from "lodash"
const articles = [
    {id : 1 , titre : "premier article" , contenu : "lorem ipsum"}
] ;

export const reducerArticle = (state = articles , action) => {
    const cloneState = _.cloneDeep(state);
    switch( action.type ){
        case "ARTICLE_INIT" : 
            return action.payload ;
        case "ARTICLE_ADD" : 
            cloneState.push(action.payload);
            return cloneState ; 
        case "ARTICLE_UPDATE" : 
            return cloneState.map(function(a){
                if(a.id === action.payload.id){
                    return action.payload
                }
                return a
            })
        case "ARTICLE_SUPPRIMER" :
            return cloneState.filter(function(item){ 
                return item.id !== action.payload
            })
        default : 
            return state
    }
}
