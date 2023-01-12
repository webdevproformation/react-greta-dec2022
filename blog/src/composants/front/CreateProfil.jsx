import { useRef } from "react";
import Joi from "joi";
import axios from "axios";
import _ from "lodash"

const CreateProfil = () => {
    const nomRef = useRef()
    const loginRef = useRef()
    const passwordRef = useRef()
    const password_confirmRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const profil = {
            nom : nomRef.current.value,
            login : loginRef.current.value,
            password : passwordRef.current.value,
            password_confirm : password_confirmRef.current.value,
        }

        const validateurProfil = Joi.object({
            nom : Joi.string().min(4).max(200).regex(/^[^<>]*$/).required(),
            login : Joi.string().min(4).max(200).regex(/^[^<>]*$/).required(),
            password : Joi.string().min(4).max(200).regex(/^[^<>]*$/).required(),
            password_confirm : Joi.ref('password'),
        });

        const { error } = validateurProfil.validate(profil , {abortEarly : false})

        if(error) return console.log(error)
        
        // verifier si un user dispose du login saisi dans le formulaire 

        const reponse = await axios.get(`http://localhost:3004/users?login=${loginRef.current.value}`)

        if(reponse.data.length > 0) return console.log("user existe déja ce login")

        const newUser = await axios.post(`http://localhost:3004/users` , _.omit(profil, ["password_confirm"]))

        if(!_.isEmpty(newUser.data)) return console.log("user crée en base de données " , newUser.data); 

    }

    return ( <>
        <h1 className="mb-4">Créer un profil</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="votre nom" className="form-control mb-3" ref={nomRef} />
            <input type="text" placeholder="votre login" className="form-control mb-3" ref={loginRef} />
            <input type="password" placeholder="votre password" className="form-control mb-3" ref={passwordRef} />
            <input type="password" placeholder="confirmer password" className="form-control mb-3" ref={password_confirmRef} />
            <input type="submit" className="btn btn-primary" />
        </form>
    </> );
}
 
export default CreateProfil;