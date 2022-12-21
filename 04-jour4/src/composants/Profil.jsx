import { UserContext } from "../contexts/userContext"
import { useContext } from "react"

const Profil = () => {

    const {profil} = useContext(UserContext);

    return ( 
        <>
            { profil.logged ? <p>Bienvenu {profil.login }!!!</p> : <p>veuillez vous connecter</p> }
        </>

     );
}
 
export default Profil;