import NavDashboard from "../NavDashboard";

const Dashboard = () => {
    return ( <>
        <div className="row">
            <div className="col-3">
                <NavDashboard />
            </div>
            <div className="col">
                <h1 className="my-3">Accueil du dashboard</h1>
                <table></table>
            </div>
        </div>
    </> );
}

export default Dashboard;