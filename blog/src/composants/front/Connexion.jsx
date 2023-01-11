import { useRef , useState } from "react"
import Joi from "joi";
import {useDispatch, useSelector} from "react-redux"

const Connexion = () => {
    const loginRef = useRef();
    const passwordRef = useRef();
    const [message, setMessage] = useState([]);
    const user = useSelector((store) => store.reducerUser)
    const dispatch = useDispatch();

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

        if(error || user.erreur){
            let message = [];
            if(error){
                for(let m of error.details){
                    message.push(m.message)
                }
            }
            if(user.erreur){
                message.push(user.erreur)
            }
            setMessage(message);
            return 
        }

        dispatch({type : "USER_LOGIN" , payload : identifiants})
        
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
                <input type="password" className="form-control" ref={passwordRef} placeholder="votre password" 
                onFocus={()=> setMessage([])}/>
            </div>
            <div className="mb-3">
                <input type="submit" className="btn btn-dark" value="connexion" 
                onFocus={()=> setMessage([])}/>
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