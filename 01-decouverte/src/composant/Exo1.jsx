const Exo1 = () => { // PascalCase
    // variable camelCase
    const jourSemaine = ["lundi",  "mardi" , "mercredi" , "jeudi" , "vendredi" , "samedi" , "dimanche "] ;
    return <ul>
        { jourSemaine.map( function(jour, index){
            {/* attention sur la balise parent dans return du map 
            il faut ajouter l'attribut key={ index }
            important lorsque l'on va modifier la liste */ }
            return <li key={index}>{jour}</li>
        }) }
    </ul>
}

export default Exo1 ;