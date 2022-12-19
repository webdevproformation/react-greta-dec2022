import { useState } from "react"
import Bouton from "./Bouton"

const Fleurs = () => {

    const [fleur , setFleur] = useState("rose")

    const modifierFleur = (nomFleur) => {
        setFleur(nomFleur)
    }

    return (
        <>
            <h2>relation Enfant Parent</h2>
            <p>{ fleur }</p>
            <Bouton action={modifierFleur} />
        </>
    );
}
 
export default Fleurs;