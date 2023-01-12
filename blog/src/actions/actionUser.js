import axios from "axios";

// demander à l'API est ce qu'il y a un user qui a login ... et password ...
export function getUser( login , password ){
    return (dispatch) => {
        return axios.get(`http://localhost:3004/users?login=${login}&password=${password}`)
            .then(rep => dispatch({type : "USER_GET" , payload : rep.data}))
            .catch(ex => console.log(ex));
    }
}
