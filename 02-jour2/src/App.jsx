/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css' */
// remise à plat 
import Exo1 from "./composants/Exo1"
import Exo2 from "./composants/Exo2"
import Exo3 from "./composants/Exo3"
import Menu from "./composants/Menu"    
import Texte from "./composants/Texte"    

function App() {
  
  return (
    <>
      <Menu />
      <div className="container">
        <section className="row">
          <div className="col-4">
            <h1>Coucou les amis !!</h1>
          </div>
          <div className="col-4">
            <h2>Exo 1</h2>
            <Exo1 />
          </div>
          <div className="col-4">
            <h2>Exo 2</h2>
            <Exo2 />
          </div>
          <div className="col-4">
            <h2>présentation de useState</h2>
            <Texte />
          </div>
          <div className="col-4">
            <h2>Exo3</h2>
            <Exo3 />
          </div>
        </section>
      </div>
    </>
  )
}

export default App