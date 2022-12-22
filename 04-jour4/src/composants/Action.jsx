import { Button } from "react-bootstrap"
import { ListeContext } from "../contexts/listeContext" // store 
import { useContext } from "react" // hook pour utiliser le store 


const Action = () => {
    const valeurs = useContext(ListeContext) // ["element1", "element2", "element3"] 
    return ( 
        <Button variant="warning">action {valeurs[0]}</Button>
    );
}
 
export default Action;