import {useCocktails} from "../hook/useCocktail"
const Cocktails = () => {
    const [cocktails,lodding] = useCocktails(); 
    return ( <>
        <h2>Cocktails</h2>
            <input type="text" placeholder="saisir une cocktail" className="me-2" />
            <input type="submit" value="rechercher" />
        {lodding ? 
            <>données en cours de chargement</> :
            <div className="row">
                {cocktails.map(function(item){
                    return <article className="col-2" key={item.id}>
                        <h2>{item.nom}</h2>
                        <img src={item.img} alt="" className="img-fluid" />
                        <p>{item.description}</p>
                    </article>
                })}
            </div>
        }
    </> );
}
 
export default Cocktails;