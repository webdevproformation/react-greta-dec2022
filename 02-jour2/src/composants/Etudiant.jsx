import { useState } from "react"

const Etudiant = () => {
    const [etudiant , setEtudiant] = useState( { nom  : "Alain" , age : 20 , competences : ["js" , "html"] })

    const handleClick = () => {
        // setEtudiant( ++etudiant.age )
        // je prend l'age de etudiant augmente de +1 et je mets dans setEtudiant 
        // setEtudiant( 21 ) etudiant = 21
        //etudiant.age++
        //setEtudiant( { nom  : "Alain" , age : ++etudiant.age , competences : ["js" , "html"] } )
        setEtudiant( { ...etudiant , age : ++etudiant.age } ); 
        // spread operator 
        
        // setEtudiant( { nom  : "Alain" , age : 20 , competences : ["js" , "html"] , age : ++etudiant.age } ); 
    }

    const handleClickCompetence = () => {
        // si je clique ajouter dans la propriété competence de l'etudiant react (comme compétence supplémentaire)
        //setEtudiant(etudiant.competences.push("react")) 
        // etudiant["js", "html" , "react"]
        etudiant.competences.push("react");
        setEtudiant({ ...etudiant , competences: etudiant.competences}) 
    }

    return (
        <>
            <h2>Fiche étudiant</h2>
            <p>{etudiant.nom}</p>
            <p>{etudiant.age}</p>
            {etudiant.competences.map(function(item , index){
                return <p key={index}>{item}</p>
            })}
            <button className="btn btn-dark" onClick={handleClick}>Augmenter age de l'étudiant de +1</button>
            <button className="btn btn-secondary" onClick={handleClickCompetence}>ajouter une compétence</button>
        </>

      );
}
 
export default Etudiant;