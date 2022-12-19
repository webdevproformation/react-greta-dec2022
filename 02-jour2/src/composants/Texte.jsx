import { useState } from "react" ; // importer useState depuis react qui est dans le dossier node_modules

const Texte = () => {

    let [ text , setText ] = useState("un peu de texte") ; 
    // const text = ""; 
    // hook use... hook => crochet / fonction qui permet d'agir sur des comportements profond de React 
    // useState() => renvoie un tableau qui contient TOUJOURS 2 valeurs 
    // text = ""
    // setText => fonction qui permet de modifier la valeur de text 
    // text = "bonjour",   => il ne se passe rien 
    // setText("bonjour") pour modifier la valeur stockée dans text
    // console.log("Texte")
    const handleClick = () => {
        // text = "texte modifié"
        setText("modification du texte");  
        // modification de la valeur de la valeur text
        // ET 
        // le composant est re exécuté  
    }

    return ( 
        <>
            <button 
                className="btn btn-sm btn-warning"
                onClick={handleClick}>
                    action
            </button>
            <p>{ text }</p>
        </>
     );
}
 
export default Texte;