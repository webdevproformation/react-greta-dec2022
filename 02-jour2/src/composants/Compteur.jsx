const Compteur = (props) => {
    return ( 
        <>
            <button onClick={props.diminuer} className="btn btn-success">-</button> 
            <span className="mx-3">{props.nb}</span>
            <button onClick={props.augmenter}  className="btn btn-info">+</button>
        </>
     );
}
 
export default Compteur;