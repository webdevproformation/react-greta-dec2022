import { useState } from "react"
import Compteur from "./Compteur";

const Compteurs = () => {
    const [compteurs, setCompteurs ] = useState([
        {id : 1 , nb : 0},
        {id : 2 , nb : 3},
        {id : 3 , nb : -4}
    ])

    return ( 
        <>
            <h2 className="h5">Système de compteurs</h2>
            {compteurs.map(function(item, index){
                return <Compteur element={item} key={index} />
            })}
        </>
     );
}
 
export default Compteurs;