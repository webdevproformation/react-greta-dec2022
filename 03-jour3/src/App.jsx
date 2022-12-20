
import Compteurs from "./composants/Compteurs"
import Menu from "./composants/Menu"

function App() {
  return (<>
    <Menu titre="jour3"/>
    <div className="container">
      <section className="row">
        <div className="col-3">
          <Compteurs />
        </div>
      </section>
    </div>
  </>)
}

export default App
