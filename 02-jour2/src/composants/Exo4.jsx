import { useState } from "react"
const Exo4 = () => {
    const [ information , setInformation] = useState("")
    const etudiants = ["Alain", "Céline", "Charles" , "Zorro"]
    const handleClick = () => {
        /* setInformation( () => {
            if(etudiants.length <= 2){
                return "cours individuel"
            }
            return "cours collectif"
        } ) */
        setInformation( () => {
            return  (etudiants.length <= 2) ? "cours individuel" : "cours collectif" ;
        } )
    }
    return ( 
        <>
            <button className="btn btn-info" onClick={handleClick}>action</button>
            <p>{information}</p>
        </>
    );
}
 
export default Exo4;