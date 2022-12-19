import { useState } from "react"
import Compteur from "./Compteur"

const Compteurs = () => {
    const [nb, setNb] = useState(0)

    const augmenter = () => {
        setNb(nb + 1)
    }
    const diminuer = () => {
        setNb(nb - 1)
    }

    return ( 
        <>
            <h2>Dernier exo</h2>
            <Compteur nb={nb} augmenter={augmenter} diminuer={diminuer} />
        </>
     );
}
 
export default Compteurs;