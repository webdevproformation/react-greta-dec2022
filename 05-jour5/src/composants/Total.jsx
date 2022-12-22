import { useContext } from "react" // 13
import { OperationContext } from "../contexts/operationContext" // 13

const Total = () => { // #2
    const { operation }= useContext(OperationContext) // 13
    return ( <div className="text-center">
        <h1>Total</h1>
        <p>{operation.reduce(function(total, valeur){
            return total += valeur.montant
        }, 0)}</p> {/** 13 */}
    </div> );
}
 
export default Total;