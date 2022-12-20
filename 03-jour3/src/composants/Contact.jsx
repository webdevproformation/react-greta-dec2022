
// récupérer les valeurs saisies dans les deux champs du formulaire 
// moment où je soumets le formulaire 
import { useRef } from "react"

//https://reactjs.org/docs/hooks-reference.html
// useState
// useReducer
// useRef 

// useEffect 
// useMemo

const Contact = () => {
    const sujetRef = useRef();
    const commentaireRef = useRef(); // stocker une valeur dans une adresse mémoire précise
                                     // le fait de modifier la variable  commentaireRef 
                                     // n'entraine pas de re render du composant 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(sujetRef.current.value);
        console.log(commentaireRef.current.value);
    }
    return ( 
        <>
            <h2>Gestion des formulaires avec React</h2>
            <form onSubmit={handleSubmit}> 
                <input type="text" className="form-control mb-3" placeholder="sujet" ref={sujetRef} />
                <textarea  cols="30" rows="10"  className="form-control mb-3" placeholder="commentaire" ref={commentaireRef}></textarea>
                <input type="submit" className="btn btn-primary" />
            </form>
        </>

     );
}
 
export default Contact;