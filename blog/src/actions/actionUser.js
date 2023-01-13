import axios from "axios";

// demander à l'API est ce qu'il y a un user qui a login ... et password ...
export function getUser( login , password ){
    return (dispatch) => {
        return axios.get(`http://localhost:3004/users?login=${login}&password=${password}`)
            .then(rep => {
                    if(rep.data.length > 0){
                        // login et password existe
                        const profil = { ...rep.data[0] , isLogged : true, erreur : "" }
                        localStorage.setItem("auth" , JSON.stringify(profil)); 
                        dispatch({type : "USER_GET" , payload : profil})
                    }else {
                        // si erreur dans les identifiants 
                        dispatch({type : "USER_GET" , payload : { isLogged : false , erreur : "identifiants invalides"}})
                    }
                }
            )
            .catch(ex => console.log(ex));
    }
}


export function isLogged(){
    return dispatch => {
        if(localStorage.getItem("auth")){
            return dispatch({type : "USER_GET" , payload : JSON.parse(localStorage.getItem("auth"))})
        }
    }
    
}
