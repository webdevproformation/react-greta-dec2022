const Exo1 = () => {
    const fleurs = [ "jasmin" , "violette" , "rose" , "lys"   ];
    // console.log("Exo1")
    return ( 
        <ul>
            {/* une boucle en jsx via la méthode .map() des tableaux de javascript */}
            { fleurs.map( function(item , index){
                return <li key={index}>{item}</li>
            } ) }
        </ul>
      );
}
 
export default Exo1;