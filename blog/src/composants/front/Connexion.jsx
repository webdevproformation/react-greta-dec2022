import { useRef , useState , useEffect } from "react"
import Joi from "joi";
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"

const Connexion = () => {
    const loginRef = useRef();
    const passwordRef = useRef();
    const [message, setMessage] = useState([]);
    const user = useSelector((store) => store.reducerUser)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(function(){ // redirection si le profil saisit correspond à celui dans la base de données 
        if(user.isLogged){
            navigate("/admin");
        }
    } , [user.isLogged]);

    useEffect( function(){ // le message d'erreur si identifiants invalides
        if(user.erreur){
            setMessage([user.erreur])
        }
    } , [user.erreur]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // récupérer les données saisies
        const identifiants = {
            login : loginRef.current.value,
            password : passwordRef.current.value
        }
        // IL FAUT VERIFIER que les données saisies sont CONFORMES A VOS ATTENTES 
        // avant d'envoyer à redux / base de données 
        const schemaValidation = Joi.object({
            login :  Joi.string().min(4).max(200).regex(/^[^<>]*$/).required(),
            password : Joi.string().min(4).max(200).regex(/^[^<>]*$/).required(),
        })
        const {error} = schemaValidation.validate(identifiants , {abortEarly : false});
        // si il y a une erreur dans données 
        // afficher le bandeau rouge et STOP
        if(error){
            let message = [];
            for(let m of error.details){
                message.push(m.message)
            }
            setMessage(message);
            return 
        }
        // sinon test les idenfiants saisis dans Redux 
        dispatch({type : "USER_LOGIN" , payload : identifiants})
        // si login et password conforme => alors redirection vers Admin (1er useEffet)
        // sinon non correcte => afficher un bandeau identifiants incorrects
        // 2ème useEffect  
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