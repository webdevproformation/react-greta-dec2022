import axios from "axios";

export function getAllArticles(){
    return (dispatch) => {
        return axios.get("http://localhost:3004/articles")
            .then((rep) => dispatch({type : "ARTICLE_INIT" , payload : rep.data}))
            .catch(ex => console.log(ex))
    } 
}
