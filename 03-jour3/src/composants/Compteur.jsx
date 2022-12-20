const Compteur = ({element , diminuer , augmenter}) => {
    return ( <div className="my-3">
        <button className="btn btn-danger me-2" onClick={() => diminuer(element.id)}> - </button> 
        {element.nb}
        <button className="btn btn-info ms-2"  onClick={() => augmenter(element.id)}> + </button>
    </div> );
}
 
export default Compteur;