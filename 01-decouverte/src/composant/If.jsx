// snippet => quelques lettres permettant de générer un boiler plat 

// Extension => Simple React Snippets Burke Holland

// sfc
// ffc

const If = () => {
    const show = false ;
    const tableau = [1,2,3] ; 
    // si la valeur de show est true => <p>bonjour</p>
    // si c'est vrai affiche quelquechose 
    // si la tableau est vide => <p>le tableau est vide</p> sinon <p>le tableau contient 2 élèments</p>
    // si vrai action 1 sinon action 2 
    return ( <>
        { show === true && <p>hello</p> }
        { tableau.length === 0 ? 
                <p>le tableau est vide</p> : 
                <p>le tableau contient {tableau.length} élèments</p> 
        }
    </> );
}
 
export default If;