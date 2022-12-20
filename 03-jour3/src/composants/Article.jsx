const Article = ({item , augmenter}) => {
    const {titre, contenu, like , id} = item
    return ( <div>
        <h2>{titre}</h2>
        <p>{contenu}</p>
        <button className="btn btn-success btn-sm" onClick={() => augmenter(id)}>augmenter</button> <span>{like}</span>
        <hr />
    </div> );
}
 
export default Article;