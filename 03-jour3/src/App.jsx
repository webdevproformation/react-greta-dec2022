import Articles from "./composants/Articles"
import Compteurs from "./composants/Compteurs"
import Connexion from "./composants/Connexion"
import Connexion2 from "./composants/Connexion2"
import Contact from "./composants/Contact"
import Exemple1 from "./composants/Exemple1"
import Exemple2 from "./composants/Exemple2"
import Exo1 from "./composants/Exo1"
import LastExo from "./composants/LastExo"
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
        <div className="col-3">
          <Connexion2 />
        </div>
        <div className="col-3">
          <LastExo />
        </div>
      </section>
    </div>
  </>)
}

export default App
