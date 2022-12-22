import { useContext } from "react" // 17
import { OperationContext } from "../contexts/operationContext" // 17
import { useState } from "react"

const LigneDetails = ({item}) => { // #7

    const { dispatch }= useContext(OperationContext) // 15
    const [valeurs, setValeurs]= useState(item) // 19

    const handleChange = (e) => { // 19 
        const cloneValeurs = {...valeurs}
        cloneValeurs[e.target.name] = e.target.value
        setValeurs(cloneValeurs); 
    }

    const handleSubmit = (e) => { // 19
        e.preventDefault();
        // console.log(valeurs)
        dispatch( {type: "VALIDER", payload :valeurs })
    }

    return ( 
        <>
        {item.status ? 
            <tr>
                <td>{item.id}</td>
                <td colSpan={3}>
                    <form onSubmit={handleSubmit}>{/** 19 */}
                        <input type="text" value={valeurs.nom} className="me-4" style={{ width: 250 }} onChange={handleChange} name="nom"/>
                        <input type="text" value={valeurs.montant} style={{ width: 250, marginRight : 55 }} onChange={handleChange} name="montant" />
                        <input type="submit" className="btn btn-success btn-sm" />
                    </form>
                </td>
            </tr>
            : 
            <tr>
                <td>{item.id}</td>
                <td style={{ width: 280 }}>{item.nom}</td>
                <td style={{ width: 300 }}>{item.montant}</td>
                <td>
                    <button className="btn btn-primary me-2 btn-sm" onClick={() => dispatch({type:"MODIF" , payload : item.id})}>modifier</button> {/** 18 */}
                    <button className="btn btn-dark me-2 btn-sm" onClick={() => dispatch({type:"SUPPR" , payload : item.id})}>supprimer</button> {/** 17 */}
                </td>
            </tr>
        }
        </>
     );
}
 
export default LigneDetails;