import { useState } from "react"

const Exo5 = () => {
    const [maison , setMaison] = useState({ id : 1 , nom : "residence principale" , nb_piece : 4 , prix : 100000 })
    const handleClickPrix =  () => {
        setMaison({...maison , prix : maison.prix + 40000})
    }
    const handleClickPiece = () => {
        setMaison({...maison , nb_piece : maison.nb_piece + 2})
    }
    return ( 
        <>
            <p>nb pièces : { maison.nb_piece } 
                <button className="btn btn-primary"
                        onClick={handleClickPiece}
                >
                    augmenter nb pièces
                </button>
            </p>
            <p >prix : { maison.prix }  
                <button className="btn btn-secondary"
                        onClick={handleClickPrix}
                >
                    augmenter prix
                </button>
            </p>
        </>

     ); 
}
 
export default Exo5;