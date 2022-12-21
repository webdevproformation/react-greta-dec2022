
// récupérer les valeurs saisies dans les deux champs du formulaire 
// moment où je soumets le formulaire 
import { useRef , useEffect , useState } from "react"

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

    //const etudiant = useRef({id : 1, nom : "Alain"});
    const [etudiant , setEtudiant] = useState({id : 1, nom : "Alain"});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(sujetRef.current.value);
        console.log(commentaireRef.current.value);
        //etudiant.current.nom = "Pierre" ; // aucun rerender du composant
        setEtudiant({...etudiant, nom : "Pierre"})
    }
    console.log("Contact");

    useEffect( () => {
        sujetRef.current.focus(); // champ sélectionné prêt à être rempli 
        sujetRef.current.style["border"]= "2px solid red";
        commentaireRef.current.innerHTML = [1,2,3].map((item) => item);

        // créer des variables qui ne vont pas entrainer de rerender si elles sont modifiées 
        // https://www.w3schools.com/react/react_useref.asp
    }, [])


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