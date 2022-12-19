import {useState} from "react"
import Appartement from "./Appartement"

const Immeuble = () => {
    const [appartements, setAppartements] = useState([{
        id : 1 , etage : 2 , surface : 60 , proprietaire : "Alain"
    }, {
        id : 1 , etage : 1 , surface : 120 , proprietaire : "Céline"
    }
    ]);

    return ( 
        <>
            <h2>découverte des props</h2>
            {appartements.map( function(item, index) {
                return <Appartement proprietaire={item.proprietaire} surface={item.surface} etage={item.etage} key={index}/>
                {/** attribut de composant => props 
                pas de limite au nombre de props envoyé de Parent (Immeuble) => Enfant (Appartement) */}
            } )}
        </>
     );
}
 
export default Immeuble;