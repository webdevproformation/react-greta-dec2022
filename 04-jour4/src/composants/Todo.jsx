//import { useState } from "react";
// npm i lodash 
import { useReducer , useRef } from "react";
import {Form, Button , ListGroup } from "react-bootstrap"
import _ from "lodash"

function reducer(state, action){
    const cloneState = _.cloneDeep(state)
    switch(action.type){
        case "ADD_TACHE" : 
            cloneState.unshift({
                id : Math.random() + "", // 0 1 => "0.6775457585687" générer chiffre unique pour bien distinguer les tâches 
                nom : action.payload,
                statut : false 
            })
            return cloneState ; 
        case "SUPPR_TACHE" : 
            return cloneState.filter( function( item ) {
                return item.id !== action.payload
            } )
        case "MODIF_STATUT" : 
            return cloneState.map(function(item){
                if(item.id === action.payload) return {...item , statut : !item.statut}
                return item
            })
        default :
            return state ;
    }
}

const Todo = () => {
    const [taches , dispatch] = useReducer(reducer , [])
    const inputRef = useRef();
    // [] correspond à la valeur par défaut de taches 
    //const [tache , setTache] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputRef.current.value){
            dispatch({ type : "ADD_TACHE" , payload : inputRef.current.value })
            inputRef.current.value  = "";
            return  
        }
        alert("veuillez remplir le champ !!");
    }

    return ( <>
        <h2>useReducer et formulaire</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Control type="text" placeholder="saisir une tâche" ref={inputRef} className="mb-3" />
            <Button variant="success" type="submit">
                ajouter une nouvelle tâche
            </Button>
        </Form>
        <h2 className="my-3">Liste des tâches</h2>
        {taches.length === 0 ?
            <p>aucune tâche à réaliser pour l'instant</p> :
            <ListGroup>
                {taches.map(function(item){
                   return <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                    {item.statut ? 
                        <del onDoubleClick={() => dispatch({type:"MODIF_STATUT" , payload: item.id})}>{item.nom}</del> :
                        <span onDoubleClick={() => dispatch({type:"MODIF_STATUT" , payload: item.id})}>{item.nom}</span>
                    }
                    <Button variant="outline-danger" onClick={() => dispatch({type : "SUPPR_TACHE", payload: item.id})}>
                        supprimer
                    </Button>
                    </ListGroup.Item>
                })}
            </ListGroup>
        }

    </> );
}
 
export default Todo;