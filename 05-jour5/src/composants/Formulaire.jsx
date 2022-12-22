import {useRef} from "react" //15
import { useContext } from "react" // 15
import { OperationContext } from "../contexts/operationContext" // 15


const Formulaire = () => { // #9
    const nomRef = useRef() //15
    const montantRef = useRef() //15
    const { dispatch }= useContext(OperationContext) // 15
    
    const handleSubmit = (e) => { // 15
        e.preventDefault();
        const operation = { nom : nomRef.current.value , montant : parseInt(montantRef.current.value) }
        dispatch({type:"ADD" , payload : operation})
        nomRef.current.value = "";
        montantRef.current.value = "";
    }

    return (
        <>
            <h2 className="text-center">Ajouter une nouvelle opération</h2>
            <div className="d-flex justify-content-center">
                <form className=" w-75" onSubmit={handleSubmit}> {/** 15 */}
                    <div className="mb-3">
                        <label htmlFor="nom">nom</label>
                        <input type="text" className="form-control" id="nom" ref={nomRef} /> {/** 15 */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="montant">montant</label>
                        <input type="number" className="form-control" id="montant" ref={montantRef} /> {/** 15 */}
                    </div>
                    <div className="d-flex justify-content-end mb-3">
                        <input type="submit" className="btn btn-success" />
                    </div>
                </form>
            </div>
        </> 
     );
}
 
export default Formulaire;