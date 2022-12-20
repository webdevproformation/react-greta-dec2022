const Compteur = (props) => {
    return ( 
        <>
            <button onClick={props.diminuer} className="btn btn-success btn-sm">-</button> 
            <span className="mx-3">{props.nb}</span>
            <button onClick={props.augmenter}  className="btn btn-info btn-sm">+</button>
        </>
     );
}
 
export default Compteur;