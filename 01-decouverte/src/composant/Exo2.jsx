const Exo2 = () => {
    const etudiants = [
        {id : 1 , nom : "Alain" , isAdmin : true},
        {id : 2 , nom : "Benoit" , isAdmin : false},
        {id : 3 , nom : "Céline" , isAdmin : true}
    ];

    // boucle qui contient un ternaire
    return ( <ul>
       { etudiants.map( function(item){
        return <li key={item.id}> 
                    {item.nom} est { item.isAdmin === true ? "admin" :         "utilisateur non connu" }  
                </li>
       } ) }
       {/** solution avec fonction fléchée */}
       { etudiants.map( item => 
        <li key={item.id}> 
            {item.nom} est { item.isAdmin ? "admin" : "utilisateur non connu" }  
        </li>
        )}
    </ul> );
}
 
export default Exo2;