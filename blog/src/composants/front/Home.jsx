import { useDispatch, useSelector } from "react-redux"

// useSelector === store.getState()
// useDispatch === store.dispatch()

const Home = () => {
    const articles = useSelector((reducer) => {return reducer} )
    const dispatch = useDispatch()

    const supprimer = ({id}) => {
        dispatch({type : "SUPPRIMER" , payload : id});
    }

    return ( <>
        <h1>Home</h1>
        {articles.map((article) => {
            return <article key={article.id}>
                <h2>{ article.titre }</h2>
                <p>{ article.contenu }</p>
                <button className="btn btn-danger" onClick={() => supprimer(article)}>supprimer</button>
            </article>
        })}
    </> );
}
 
export default Home;