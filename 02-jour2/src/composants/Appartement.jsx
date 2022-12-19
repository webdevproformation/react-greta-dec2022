const Appartement = (props) => { // props est objet qui contient
    // {etage : 2 , surface : 60 , proprietaire : "Alain"}
    return ( <section>
        <h3>{ props.proprietaire}</h3>
        <p> etage : {props.etage} - surface : {props.surface} </p>
    </section> );
}
 
export default Appartement;