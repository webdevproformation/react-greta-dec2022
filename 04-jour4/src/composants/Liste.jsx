import { ListeContext } from "../contexts/listeContext" // store 
import { useContext } from "react" // hook pour utiliser le store 

const Liste = () => {
    const valeurs = useContext(ListeContext)
    return ( <ul>
        {valeurs.map(function(item, index){
            return <li key={index}>{item}</li>
        })}
    </ul> );
}
 
export default Liste;