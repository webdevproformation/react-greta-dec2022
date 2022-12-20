import { useRef } from "react"

const Connexion = () => {
    const loginRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginRef.current.value , passwordRef.current.value)
    }

    return ( 
        <>
            <h2>Formulaire de connexion</h2>
             <form onSubmit={handleSubmit}>
                <input type="text" placeholder="votre login" className="form-control mb-3" ref={loginRef} />
                <input type="password" placeholder="votre password" className="form-control mb-3" ref={passwordRef} />
                <input type="submit"  className="btn btn-dark"/>
            </form>
        </>
       
     );
}
 
export default Connexion;