const Compteur = ({element}) => {
    return ( <div className="my-3">
        <button className="btn btn-danger me-2"> - </button> 
        {element.nb}
        <button className="btn btn-info ms-2"> + </button>
    </div> );
}
 
export default Compteur;