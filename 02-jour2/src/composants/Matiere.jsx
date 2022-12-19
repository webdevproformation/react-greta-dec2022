/* 
solution 1
const Matiere = (props) => {
    return ( <p>
        nom : {props.matiere.nom} - duree {props.matiere.duree} {props.matiere.unite}
    </p> );
}
 
export default Matiere; */


// solution 2
const Matiere = ({matiere}) => {
    return ( <p>
        nom : {matiere.nom} - duree {matiere.duree} {matiere.unite}
    </p> );
}
 
export default Matiere; 
