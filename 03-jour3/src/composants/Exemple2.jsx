// import { useState ,  useReducer } from "react"
import { useReducer } from "react"

function reducer(state , action){ // fonction que l'on peut stocker hors du composant (réutiliser)
    switch (action) { 
        // fusionner les 3 fonctions dans la fonction réductrice 
        case "AUGMENTER" :
            return state + 1
        case "DIMINUER" :
            return state - 1
        case "ZERO" :
            return 0 ;
        default :
            return state ;
    }
}

const Exemple2 = () => {
    // const [nb , setNb] = useState(0) // 1 etat
    const [nb , dispatch] = useReducer( reducer , 0)
    // useReducer(fonction réductrice , valeur initial de nb )
    // prendre les 3 fonctions insérer dans la fonction reductrice 
    /* const augmenter = () => { 
        setNb(nb + 1)
    }
    const diminuer = () => {
        setNb(nb - 1)
    }
    const zero = () => {
        setNb(0)
    } */
    return ( 
        <>
            <h2>Exemple2</h2>
            <button onClick={() => dispatch("AUGMENTER")}>augmenter</button>
            <button onClick={() => dispatch("DIMINUER")}>diminuer</button>
            <button onClick={() => dispatch("ZERO")} className="me-2">retour à 0</button>
            <span>{ nb }</span>
        </>
     );
}
 
export default Exemple2;