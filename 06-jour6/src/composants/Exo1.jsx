import { useExo1 } from "../hook/useExo1"

const Exo1 = () => {

    const users = useExo1(); // useState / useEffect / requête ajax => stocker dans une fonction à part 
    // custom hook 

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