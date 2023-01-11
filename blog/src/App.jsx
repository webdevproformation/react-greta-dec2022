import Nav from "./composants/Nav";
import { Outlet } from "react-router-dom"

const App = () => {
  return ( <>
    <Nav />
    <div className="container">
      <Outlet /> {/** rappel le système de routing d'Angular */}
    </div>
  </> );
}
 
export default App;