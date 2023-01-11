import { useDispatch, useSelector } from "react-redux"

// useSelector === store.getState()
// useDispatch === store.dispatch()

const Home = () => {
    const articles = useSelector((store) => {return store.reducerArticle} )
    const dispatch = useDispatch()

    const supprimer = ({id}) => {
        dispatch({type : "ARTICLE_SUPPRIMER" , payload : id});
    }

    return ( <>
        <h1>Home</h1>
        <div className="row">
            {articles.map((article) => {
                return <article key={article.id} className="col-4">
                    <h2>{ article.titre }</h2>
                    <p>{ article.contenu }</p>
                    <button className="btn btn-danger" onClick={() => supprimer(article)}>supprimer</button>
                </article>
            })}
        </div>
        
    </> );
}
 
export default Home;