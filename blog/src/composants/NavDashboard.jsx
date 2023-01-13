import { NavLink } from "react-router-dom"

const NavDashboard = () => {
    return ( <>
        <h2 className="my-3 fs-4">Gestion du site internet</h2>
        <ul className="list-group">
            <li className="list-group-item">
                <NavLink to="/admin" className={({isActive}) =>  isActive ? "list-group-item list-group-item-action active" : "list-group-item"
                        } end> Accueil </NavLink>
            </li>
            <li className="list-group-item">
                <NavLink to="/admin/articles" className={({isActive}) =>  isActive ? "list-group-item list-group-item-action active" : "list-group-item"
                        }>Gestion Articles </NavLink>
            </li>
            <li className="list-group-item">
                <NavLink to="/admin/users" className={({isActive}) =>  isActive ? "list-group-item list-group-item-action active" : "list-group-item"
                        }>Gestion Users </NavLink>
            </li>
        </ul>
    </> );
}
 
export default NavDashboard;