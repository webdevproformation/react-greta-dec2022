import NavDashboard from "../NavDashboard";

const Articles = () => {
    return ( <>
        <div className="row">
            <div className="col-3">
                <NavDashboard />
            </div>
            <div className="col">
                <h1 className="my-3">Gestion des articles publiés</h1>
                <table></table>
            </div>
        </div>
    </> );
}

export default Articles;