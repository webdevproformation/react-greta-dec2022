import { useState } from "react"
import Compteur from "./Compteur";
import _ from "lodash"

const Compteurs = () => {
    const [compteurs, setCompteurs ] = useState([
        {id : 1 , nb : 0},
        {id : 2 , nb : 3},
        {id : 3 , nb : -4}
    ])

    const diminuer = (id) => {

        const cloneCompteurs = _.cloneDeep(compteurs) ; 
        const compteurAModifier = cloneCompteurs.find(function(item){
            return item.id === id
        })
        const index = cloneCompteurs.indexOf(compteurAModifier)
        cloneCompteurs[index].nb-- ;
        setCompteurs(cloneCompteurs)
    }

    const augmenter = (id) => {
        const cloneCompteurs = _.cloneDeep(compteurs) 
        const compteurAModifier = cloneCompteurs.find(function(item){
            return item.id === id
        })
        const index = cloneCompteurs.indexOf(compteurAModifier)
        cloneCompteurs[index].nb++ ;
        setCompteurs(cloneCompteurs)
    }

    return ( 
        <>
            <h2 className="h5">Système de compteurs</h2>
            {compteurs.map(function(item, index){
                return <Compteur element={item} key={index} diminuer={diminuer} augmenter={augmenter} />
            })}
        </>
     );
}
 
export default Compteurs;