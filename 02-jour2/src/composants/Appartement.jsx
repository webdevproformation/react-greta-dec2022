const Appartement = (props) => { // props est objet qui contient
    // {etage : 2 , surface : 60 , proprietaire : "Alain"}
    return ( <section>
        <h3>{ props.proprietaire}</h3>
        <p> etage : {props.etage} - surface : {props.surface} </p>
    </section> );
}
export default Appartement;

/* const Appartement = ({proprietaire , etage , surface}) => { 
    return ( <section>
        <h3>{ proprietaire}</h3>
        <p> etage : {etage} - surface : {surface} </p>
    </section> );
}
 
export default Appartement; */