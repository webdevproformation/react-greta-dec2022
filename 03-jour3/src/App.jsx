import Articles from "./composants/Articles"
import Compteurs from "./composants/Compteurs"
import Connexion from "./composants/Connexion"
import Contact from "./composants/Contact"
import Exemple1 from "./composants/Exemple1"
import Exemple2 from "./composants/Exemple2"
import Exo1 from "./composants/Exo1"
import Menu from "./composants/Menu"

function App() {
  return (<>
    <Menu titre="jour3"/>
    <div className="container">
      <section className="row">
        <div className="col-3">
          <Compteurs />
        </div>
        <div className="col-3">
          <Articles />
        </div>
        <div className="col-3">
          <Exemple1 />
        </div>
        <div className="col-3">
          <Exemple2 />
        </div>
        <div className="col-3">
          <Exo1 />
        </div>
        <div className="col-3">
          <Contact />
        </div>
        <div className="col-3">
          <Connexion />
        </div>
      </section>
    </div>
  </>)
}

export default App
