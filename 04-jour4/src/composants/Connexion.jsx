import {Form, Button} from "react-bootstrap"
import {useRef , useContext} from "react"
import { UserContext } from "../contexts/userContext"

const Connexion = () => {
    const { dispatch , profil } = useContext(UserContext)
    const loginRef = useRef()
    const passwordRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault();
        const identifiants = {login  : loginRef.current.value , password : passwordRef.current.value}
        dispatch({type : "CONNEXION" , payload : identifiants})
        loginRef.current.value = ""
        passwordRef.current.value = ""
    }
    return ( 
        <>
            { profil.logged ? <Button onClick={ () => dispatch({type : "DECONNEXION" })}>déconnexion</Button> :
                <>
                    <h2>Form connexion</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Control type="text" className="mb-3" ref={loginRef}/>
                        <Form.Control type="password" className="mb-3" ref={passwordRef} />
                        <Button type="submit" variant="info">
                            connexion
                        </Button>
                    </Form>
                </>
            }
            
        </>

     );
}
 
export default Connexion;