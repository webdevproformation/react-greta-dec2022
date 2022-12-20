import { useReducer } from "react"

import { reducer } from "../reducer/likeReducer"

const Exo1 = () => {
    const [like , dispatch] = useReducer(reducer  , 0)
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