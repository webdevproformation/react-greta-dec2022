import axios from "axios";

export function getAllArticles(){
    return (dispatch) => {
        return axios.get("http://localhost:3004/articles")
            .then((rep) => dispatch({type : "ARTICLE_INIT" , payload : rep.data}))
            .catch(ex => console.log(ex));
    } 
}

export function updateArticle(id , article){
    return dispatch => {
        return axios.put("http://localhost:3004/articles/"+id , article)
              .then(rep => dispatch({type : "ARTICLE_UPDATE" , payload : rep.data}))
              .catch(ex => console.log(ex));
    }
}
