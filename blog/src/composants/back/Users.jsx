import NavDashboard from "../NavDashboard";

const Users = () => {
    return ( <>
        <div className="row">
            <div className="col-3">
                <NavDashboard />
            </div>
            <div className="col">
                <h1 className="my-3">Gestion des profils utilisateurs</h1>
                <table></table>
            </div>
        </div>
    </> );
}

export default Users;