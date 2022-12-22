import {Form , Button } from "react-bootstrap"
import {useRef , useContext} from "react" // #3 #10
import { CompteurContext } from "../contexts/compteurContext" // #10


const Formulaire = () => {
    const {dispatch} = useContext(CompteurContext); // #10
    // #3
    const inputRef = useRef()
    const selectRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        const formulaire = {
            input : inputRef.current.value,
            select : selectRef.current.value
        }
        console.log(formulaire);
        // dispatch ....
        dispatch({type:"AJOUTER"})
        e.target.reset()
    }

    return ( <>
        {/** #1 */}
        <h1>formulaire</h1>
        <Form onSubmit={handleSubmit}>{/** #3 */}
            <Form.Control type="text" className="mb-3" placeholder="saisir un texte" ref={inputRef}/>{/** #3 */}
            <Form.Select className="mb-3" ref={selectRef}>{/** #3 */}
                <option>choisir une valeur</option>
                <option value="encours">encours</option>
                <option value="finalisé">finalisé</option>
                <option value="à planifier">à planifier</option>
            </Form.Select>
            <Button type="submit" variant="success">
                ajouter
            </Button>
        </Form>
    </> );
}
 
export default Formulaire;