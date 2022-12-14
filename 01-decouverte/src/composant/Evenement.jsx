// sfc Stateless Function Component
const Evenement = () => { 
    // si je clique sur le bouton Action 
    // faire apparaitre un alert("j'ai cliqué sur le bouton")
    
    const handleClick = () => {
        alert("j'ai cliqué sur le bouton");
    }

    return ( 
        <>
            <h1>Gestion des évènements</h1>
            <button onClick={handleClick}>Action</button>
            {/** attention pas de () sur la fonction dans le onClick */}
        </>
     );
     /* document
        .querySelector("button")
        .addEventListener("click" , function(){ 
            alert("j'ai cliqué sur le bouton"); 
        })
     */
}
 
export default Evenement;