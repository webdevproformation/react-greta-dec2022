import { useState } from "react"
import Compteur from "./Compteur";

const Compteurs = () => {
    const [compteurs, setCompteurs ] = useState([
        {id : 1 , nb : 0},
        {id : 2 , nb : 3},
        {id : 3 , nb : -4}
    ])

    const diminuer = (id) => {
        // compteurs = [{},{},{}]
        // récupérer {} à modifier à diminuer 
        // id = 1
        //console.log(compteurs)
        const compteurAModifier = compteurs.find(function(item){
            return item.id === id
        })
        // index la position dans le table compteurs de {} à modifier 
        const index = compteurs.indexOf(compteurAModifier) 
        // on modifie la propriété nb de {} qui a l'id 1 et qui est en position index
        compteurs[index].nb-- ;
        // lancer la mise à jour du state via la fonction setCompteurs()
        // attention il faut donner à cette fonction l'intégralité du tableau 
        setCompteurs([...compteurs])
    }

    const augmenter = (id) => {
        
        const compteurAModifier = compteurs.find(function(item){
            return item.id === id
        })
        const index = compteurs.indexOf(compteurAModifier)
        compteurs[index].nb++ ;
        setCompteurs([...compteurs])
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