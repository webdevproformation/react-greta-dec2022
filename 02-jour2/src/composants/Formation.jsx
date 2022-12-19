import { useState } from "react"
import Matiere from "./Matiere";

const Formation = () => {
    const [ matieres ] = useState([
        {id : 1 , nom : "JS" , duree : 3 , unite : "jours"},
        {id : 2 , nom : "Node" , duree : 5 , unite : "jours"},
        {id : 3 , nom : "React" , duree : 5 , unite : "semaines"},
    ])

    return ( 
        <>
            <h2>Exo Parent Enfant</h2>
            {matieres.map(function(item, index){
                return <Matiere key={index} matiere={item} />
            })}
        </>
    );
}
 
export default Formation;