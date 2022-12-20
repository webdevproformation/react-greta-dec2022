import { useState } from "react"

const Exemple1 = () => {
    const [nb , setNb] = useState(0) // 1 etat
    // 3 fonctions qui permettent de modifier cet état
    // fusionner les 3 fonctions en 1 seul  
    const augmenter = () => { 
        setNb(nb + 1)
    }
    const diminuer = () => {
        setNb(nb - 1)
    }
    const zero = () => {
        setNb(0)
    }
    return ( 
        <>
            <h2>Exemple1</h2>
            <button onClick={augmenter}>augmenter</button>
            <button onClick={diminuer}>diminuer</button>
            <button onClick={zero} className="me-2">retour à 0</button>
            <span>{ nb }</span>
        </>
     );
}
 
export default Exemple1;