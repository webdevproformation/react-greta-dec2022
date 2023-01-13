import NavDashboard from "../NavDashboard";
import { useParams } from "react-router-dom";
import { useEffect , useState } from "react"
import { useSelector } from "react-redux";

const ArticlesUpdate = () => {

    const params = useParams();
    const articles = useSelector((store)=> store.reducerArticle)
    const [article, setArticle] = useState({})

    useEffect( function(){ 
        // permet de remplir le formulaire avec les données du store
        const id = params.id
        //const id = url.pathname.split("/").at(-1)
        const f = articles.find(a => a.id == id)
        setArticle(f)
    }, [articles])

    return ( <>
        <div className="row">
            <div className="col-3">
                <NavDashboard />
            </div>
            <div className="col">
                <h1 className="my-3">Modifier article</h1>
                <form>
                    <input type="text" value={article.titre} className="form-control mb-3" />
                    <textarea name="" id="" cols="30" rows="10" className="form-control mb-3" value={article.contenu}></textarea>
                    <input type="submit" className="btn btn-success" value="mettre à jour" />
                </form>
            </div>
        </div>
    </> );
}
 
export default ArticlesUpdate;