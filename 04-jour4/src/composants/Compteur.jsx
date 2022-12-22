
//#9
import {useContext} from "react"
import { CompteurContext } from "../contexts/compteurContext"

const Compteur = () => {
    //#9
    const {compteur} = useContext(CompteurContext)
    return (<h1>{compteur}</h1>); // #4 #9
}
 
export default Compteur;