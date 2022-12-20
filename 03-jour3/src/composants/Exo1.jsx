import { useReducer } from "react"

import { reducer } from "../reducer/likeReducer"

const Exo1 = () => {
    const [like , dispatch] = useReducer(reducer  , 0)
    // useState => idéal primitive 0 "texte" boolean et local (uniquement dans le composant)
    // useReducer => idéal []  {}  / utiliser mon état dans PLUSIEURS composants 
    // hook => state manager 
    // 
    // REDUX 
    // rdv 15h35 bon café @ toute suite !!!!
    return ( <>
        <h2>Exo1</h2>
        <p>{like}</p>
        <button onClick={()=> dispatch("AUGMENTER") }>aimer</button>
        <button onClick={()=> dispatch("APPRECIER")}>très aimer</button>
        <button onClick={()=> dispatch("DIMINUER")}>ne pas aimer</button>
        <button onClick={()=> dispatch("DETESTE")}>détester</button>
    </> );
}

 
export default Exo1;