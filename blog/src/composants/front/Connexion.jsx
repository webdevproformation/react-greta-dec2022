import { useRef , useState } from "react"
import Joi from "joi";

const Connexion = () => {
    const loginRef = useRef();
    const passwordRef = useRef();
    const [message, setMessage] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const identifiants = {
            login : loginRef.current.value,
            password : passwordRef.current.value
        }

        const schemaValidation = Joi.object({
            login :  Joi.string().min(4).max(200).regex(/^[^<>]*$/).required(),
            password : Joi.string().min(4).max(200).regex(/^[^<>]*$/).required(),
        })
        const {error} = schemaValidation.validate(identifiants , {abortEarly : false})

       /*  console.log(resultat)
        return */ 

        if(error){
            let message = [];
            for(let m of error.details){
                message.push(m.message)
            }
            setMessage(message);
            return 
        }
        
        // avant d'envoyer à redux / base de données 
        // IL FAUT VERIFIER que les données saisies sont CONFORMES A VOS ATTENTES 
        
    }
    
    return ( <>
        <h1>Connexion</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <input type="text" className="form-control" ref={loginRef} placeholder="votre login"/>
            </div>
            <div className="mb-3">
                <input type="password" className="form-control" ref={passwordRef} placeholder="votre password"/>
            </div>
            <div className="mb-3">
                <input type="submit" className="btn btn-dark" value="connexion"/>
            </div>
        </form>
        {message.length > 0 && <div className="alert alert-danger">
            {message.map(function(m , index){
                return <div key={index}>{m}</div>
            })}
        </div>}
    </> );
}
 
export default Connexion;