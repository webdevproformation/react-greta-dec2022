import { Outlet } from "react-router-dom";
import NavDashboard from "../NavDashboard";

const Template = () => {
    return ( <>
        <div className="row">
            <div className="col-3">
                <NavDashboard />
            </div>
            <div className="col">
                <Outlet />
            </div>
        </div>
    </> );
}
 
export default Template;