function Troisieme (){
    // quelques remarques sur le jsx
    // il est obligatoire d'avoir une balise racine pour votre composant 
    /* return (
        <div>
            <h1></h1>
            <p></p>
        </div>
    ) */

    /* return ( // utiliser un Fragment  balise sans mot clé 
        <>
            <h1></h1>
            <p></p>
        </>
    ) */

    return (
        <>
            <h1>coucou les amis </h1>
            { /** un commentaire en jsx  */ }
            <p className="toto">un texte</p>
            <p class="toto">un texte</p> {/* warning dans la console du navigateur*/}
            {/* balise orpheline il faut OBLIGATOIREMENT mettre le / */}
            <img src="" alt="" />
            <br />
            <input type="" />
            <label htmlFor=""></label>
        </>
    )

}
export default Troisieme