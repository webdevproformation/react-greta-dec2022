import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


const Articles = () => {
    const articles = useSelector((store)=>  store.reducerArticle); // utilise le store comme un cache 
    // pas besoin de refaire une requête ajax pour mettre à jour les articles 
    const navigate = useNavigate()

    const modifier = ({id}) => {
        navigate("/admin/articles/update/"+id)
    }

    return ( <>
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="my-3">Gestion des articles publiés</h1>
                    <button className="btn btn-primary">Ajouter</button>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>titre</th>
                            <th>contenu</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {articles.map(function(article){
                            return <tr key={article.id}>
                                <td>{article.id}</td>
                                <td>{article.titre}</td>
                                <td>{article.contenu}</td>
                                <td>
            <button className="btn btn-warning btn-sm me-2" onClick={() => modifier(article)}>modifier</button>
            <button className="btn btn-danger btn-sm">supprimer</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
    </> );
}

export default Articles;