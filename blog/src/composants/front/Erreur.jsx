import { useState } from "react";

const Erreur = () => {

    const [tableau , setTableau] = useState([1,2,3])

    return ( <>
        <h1>Erreur</h1>
        <button onClick={() => setTableau(function(prevTableau){
            const clonePrev = [...prevTableau]
            clonePrev.push(4)
            return clonePrev
        })}>ajouter</button>
        {tableau.map(function(chiffre, index){
            return <p key={index}>{chiffre}</p>
        })}
    </> );
}
 
export default Erreur;