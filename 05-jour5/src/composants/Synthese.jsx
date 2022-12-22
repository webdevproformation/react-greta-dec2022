import { useContext } from "react" // 13
import { OperationContext } from "../contexts/operationContext" // 13

const Synthese = () => { // #4
    const { operation }= useContext(OperationContext) // 13
    return ( <div className="row text-center">
        <div className="col-12">
            <h2>Synthèse</h2>
        </div>
        <section className="col-6">
            <h3>Revenus</h3>
            <p>{operation.reduce(function(total, valeur){
                if(valeur.montant >=0){
                    return total += valeur.montant
                }else{
                    return total
                } 
        }, 0)}</p> {/** 13 */}
        </section>
        <section className="col-6">
            <h3>Dépenses</h3>
            <p>{operation.reduce(function(total, valeur){
                if(valeur.montant < 0){
                    return total += valeur.montant
                }else{
                    return total
                }
        }, 0)}</p>  {/** 13 */}
        </section> 
    </div> );
}
 
export default Synthese;