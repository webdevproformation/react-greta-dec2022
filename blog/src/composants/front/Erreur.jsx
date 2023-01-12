import { useState } from "react";
import {useSelector, useDispatch} from "react-redux"


const Erreur = () => {

    // const [tableau , setTableau] = useState([1,2,3])
    const tableau = useSelector((store) => store.reducerArticle)
    const setTableau = useDispatch();

    return ( <>
        <h1>Erreur</h1>
        <button onClick={() => setTableau({type : "ARTICLE_ADD" , payload : 2 })}>ajouter</button>
        {tableau.map(function(article, index){
            return <pre key={index}>
                {JSON.stringify(article)}
            </pre>
        })}
    </> );
}
 
export default Erreur;