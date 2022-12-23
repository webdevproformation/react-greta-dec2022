import {useEffect, useState} from "react"

const Requete = () => {
    const [data, setData] = useState([])

    async function getArticles(){
        const reponse = await fetch("https://jsonplaceholder.typicode.com/photos?_start=10&_end=15")
        const photos = await reponse.json();
        setTimeout(() => {
            setData(photos/* .slice(0,5) */); // stocker le tableau récupéré depuis l'API dans la variable data 
        } , 2000)
        // qui est le state du composant 
    }
    useEffect( function(){
        // je veux effectuer la requête AJAX 1 seule fois , uniquement lorsque le composant est synchronisé avec le DOM 
        getArticles()
    }, [])

    return ( <>
        <h2>première requête ajax avec React</h2>
        <div className="row"> 
            {data.map(function(item){
                return <article key={item.id} className="col-2">
                    <h2 className="fs-5">{item.title}</h2>
                    <img src={item.url} alt="" className="img-fluid" />
                </article>
            })}
        </div>
    </> );
}
 
export default Requete;

// créer le composant Exo1 
// realiser une requête ajax sur l'url suivant : https://jsonplaceholder.typicode.com/users

// afficher dans la vue , pour chaque user 
// <article>
//  <h2>Bret</h2>
//  <p>Sincere@april.biz</p>
//  <p>1-770-736-8031 x56442</p>
// </article>
