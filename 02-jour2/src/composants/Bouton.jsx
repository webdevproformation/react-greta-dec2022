const Bouton = (props) => {

    const handleClick = () => {
        props.action("tulipe") ; // envoyé de l'information Enfant vers le Parent 
        // je suis en train d'exécuter une fonction qui est dans Fleurs avec un paramètre défini dans l'Enfant 
    }

    return ( 
        <button className="btn btn-danger" onClick={handleClick}>changer le nom de la fleur</button>
     );
}
 
export default Bouton;