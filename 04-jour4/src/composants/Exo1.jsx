import {useReducer , useRef} from "react"
import { Form , Button , Card , Badge } from "react-bootstrap"
import _ from "lodash"

function reducer(state , action){
    const cloneState = _.cloneDeep(state);
    switch(action.type){
        case "ADD_ARTICLE" :
            cloneState.push({
                id : Math.random() + "",
                titre : action.payload.titre,
                contenu : action.payload.contenu,
                like : 0
            })
            return cloneState;
        case "PLUS_1_LIKE" : 
            return cloneState.map( function(item){
                if(item.id === action.payload) return {...item , like : item.like + 1}
                return item
            } )
        default :
            return state ;
    } 

    // switch à la place de if car reducer va gérer en 5 Et 10 modification du state 
    /* if(action.type === "ACTION_1"){
       
    } else {
        return state ;
    } */
}

// useReducer( fonction , valeur )
// fonction => fonction reductrice => permet de gérer tous les cas de figure de notre state 
// valeur la valeur par défaut de notre state 

// const [articles, dispatch] = useReducer( fonction , valeur );
// articles => state 
// dispatch => fonction qui permet de modifier le state 
//           ET que l'on va utiliser dans notre composant 
//           dispatch({ type : "NOM_ACTION" , payload : "valeur" })

const Exo1 = () => {
    const [articles , dispatch] = useReducer( reducer  , [] )
    const inputRef = useRef();
    const textareRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputRef.current.value && textareRef.current.value){
            const article = {titre : inputRef.current.value , contenu : textareRef.current.value}
            console.log(article)
            dispatch({type:"ADD_ARTICLE" , payload : article})
            inputRef.current.value = "";
            textareRef.current.value = ""
            return ;
        }
        alert("veuillez remplir les deux champs");
    }

    return ( <>
        <h2>Exo 1</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Control type="text" className="mb-3" placeholder="titre" ref={inputRef}/>
            <Form.Control as="textarea" className="mb-3" placeholder="contenu" ref={textareRef}/>
            <Button variant="outline-dark" className="btn-sm" type="submit">
                Ajouter un nouvel article
            </Button>
        </Form>
        <h2 className="my-4">Les articles</h2>
        { articles.length === 0 ?
            <p>aucun article publié</p> :
            <>
                { articles.map(function(item){
                    return <Card key={item.id} className="mb-3">
                        <Card.Body>
                            <Card.Title>{item.titre}</Card.Title>
                            <Card.Text>{item.contenu}</Card.Text>
                            <Badge variant="primary" onClick={() => dispatch({type:"PLUS_1_LIKE" , payload : item.id})}>{item.like}</Badge>
                        </Card.Body>
                    </Card>
                }) }
            </>
        }
    </> );
}
 
export default Exo1;