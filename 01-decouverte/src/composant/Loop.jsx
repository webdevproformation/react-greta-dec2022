/* function Loop(){
    return <></>
} */

const Loop = () => {

    const etudiants = ["Alain", "Benoit" , "Céline"];

    return <>
        <h2>afficher une liste</h2>
        <p>Alain</p>
        <p>Benoit</p>
        <p>Céline</p>
        <h2>Solution 1 : répéter la même instruction</h2>
        <p>{ etudiants[0] }</p> {/* interpolation écrire une variable dans du jsx */}
        <p>{ etudiants[1] }</p>
        <p>{ etudiants[2] }</p>
        <h2>Solution 2 : la méthode officielle pour réaliser des boucles dans jsx</h2>
        {/*  etudiants.map(function(){})  */}
        {/*  la méthode  .map() prend comme paramètre une fonction => callback  */}
        {/*  ce callback va s'exécuter autant de fois qu'il y a de valeurs dans le tableau   */}
        {/*  ce callback prend 2 paramètres 
            element , index   */}
        { etudiants.map( function( item, index ){
            return <p>{item}</p>
        } ) }
    </>
}

export default Loop ;