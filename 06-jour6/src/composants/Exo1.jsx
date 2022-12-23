import {useState, useEffect} from "react"

const Exo1 = () => {
    const [users, setUsers] = useState([])

    async function getAllUser(){
        const reponse = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await reponse.json()
        setUsers(users.map(function(item){
            return {
                id : item.id ,
                nom : item.username ,
                email : item.email ,
                phone : item.phone
            }
        }));
    }

    useEffect(() => {
        getAllUser()
    } , [] )
    return ( <>
        <h2>Exo 1</h2>
        <div className="row">
           {users.map(function(item){
            return <article key={item.id} className="col-3">
                <h3>{item.nom}</h3>
                <p>email : {item.email}</p>
                <p>téléphone : {item.phone}</p>
            </article>
           })}
        </div>
    </> );
}
 
export default Exo1;