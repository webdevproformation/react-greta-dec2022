import { useParams } from "react-router-dom";
import { useEffect , useState , useRef } from "react"
import { useSelector , useDispatch } from "react-redux";
import { updateArticle } from "../../actions/actionArticle";

const ArticlesUpdate = () => {

    const params = useParams();
    const titreRef = useRef();
    const contenuRef = useRef();
    const dispatch = useDispatch();
    const articles = useSelector((store)=> store.reducerArticle)
    const [ article, setArticle ] = useState({})

    useEffect( function(){ 
        // permet de remplir le formulaire avec les données du store
        const id = params.id
        //const id = url.pathname.split("/").at(-1)
        const f = articles.find(a => a.id == id)
        setArticle(f)
    }, [articles])

    const handleChange = (e) => {
        const {name, value} = e.target;
        // {
        //    titre : "....",
        //    contenu : "....."
        //}
        /* const cp = "code postal"
        const code = 13000;
        const a = {
                prop : "Alain",
                "adresse" : "75 rue de Paris" ,
                [cp] : code
            }
              a["ville"] = "Marseille"

        console.log(a); */
        setArticle(function(prevArticle){
            return {...prevArticle , [name] : value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = parseInt(params.id) ;
        dispatch(updateArticle(id, article))
    }

    return ( <>
                <h1 className="my-3">Modifier article</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={article.titre} 
                        className="form-control mb-3" 
                        onChange={(e)=> handleChange(e)} 
                        name="titre"
                         />
                    <textarea 
                        name="contenu" 
                        rows="10" 
                        className="form-control mb-3" 
                        value={article.contenu} 
                        onChange={(e)=> handleChange(e)}
                        ></textarea>
                    <input 
                        type="submit" 
                        className="btn btn-success" 
                         />
                </form>
    </> );
}
 
export default ArticlesUpdate;