import axios from "axios";

// demander à l'API est ce qu'il y a un user qui a login ... et password ...
export function getUser( login , password ){
    return (dispatch) => {
        return axios.get(`http://localhost:3004/users?login=${login}&password=${password}`)
            .then(rep => {
                    console.log(rep.data[0])
                    dispatch({type : "USER_GET" , payload : { ...rep.data[0] , isLogged : true }})
                }
            )
            .catch(ex => console.log(ex));
    }
}
