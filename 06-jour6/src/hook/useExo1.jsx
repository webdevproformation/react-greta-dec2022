import {useState, useEffect} from "react"

export function useExo1(){ // custom hook => hook maison personnalisé
    // contient la logique de récupération des données 
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

    return users ; 
}