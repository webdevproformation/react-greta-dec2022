import LigneDetails from "./LigneDetails"; // #6
import { useContext } from "react" // 14
import { OperationContext } from "../contexts/operationContext" // 14

const Details = () => {
    const { operation }= useContext(OperationContext) // 14
    return (  
        <div>
            <h2 className="text-center">Détails des opérations</h2>
            <div className="d-flex justify-content-center">
                <table className="table table-striped w-75 ">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>nom</th>
                            <th>montant</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {operation.map(function(item ){ 
                            return <LigneDetails item={item} key={item.id} />
                        })}
                    </tbody> 
                </table>{/** 14 */}
            </div>
        </div>
    );
}
 
export default Details;