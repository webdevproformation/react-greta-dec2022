import B from "./B";

const A = () => {
    return ( 
        <>
            <p>je suis A</p>
            {/**première manière d'exécuter des composants */}
            <B prop1="texte"  prop2={10}/>
            {/**deuxieme manière d'exécuter des composants */}
            <B>
                <h1>je suis le contenu dans de la balise</h1>
            </B>
            <B  prop1="autre texte"  prop2={30}>
                <h1>je suis le contenu dans de la balise</h1>
            </B>
        </>
     );
}
 
export default A;