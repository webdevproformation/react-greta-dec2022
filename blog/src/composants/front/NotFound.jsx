import {Link} from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"

const NotFound = () => {

    useEffect( function(){
        axios.delete("https://greta-demo-3a861-default-rtdb.europe-west1.firebasedatabase.app/articles/2.json")
            .then(rep => console.log(rep.data))
    }, [])


    const texteAvecHtml = `<img src="" onerror="alert('virus')" />`
    return ( <>
    <h1 className="display-3 bg-warning text-center mt-5 rounded py-3">Not Found <small>page introuvable</small></h1>
    <p className="text-center mt-4">
        <Link to="/" className="btn btn-success">Retour à l'accueil</Link>
    </p>
    {texteAvecHtml}
    </> );
}
 
export default NotFound;