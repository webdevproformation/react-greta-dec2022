import { useState } from "react"

const Exo3 = () => {
    const [p , setP] = useState("")
    const handleMouseOver = () => {
        setP( "je survole l'image" )
    }
    const handleMouseLeave = () => {
        setP("je sors de l'image")
    }
    return ( 
        <>
            <img src="https://via.placeholder.com/400x200" alt=""
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            className="img-fluid"
            />
            <p>{ p }</p>
        </>
     );
}
 
export default Exo3;