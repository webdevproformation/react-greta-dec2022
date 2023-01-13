import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter , Routes , Route , Navigate } from "react-router-dom"
import Home from "./composants/front/Home"
import CreateProfil from "./composants/front/CreateProfil"
import Connexion from "./composants/front/Connexion"
import Dashboard from './composants/back/Dashboard'
import CycleVie from './composants/front/CycleVie'
import Erreur from './composants/front/Erreur'
import NotFound from './composants/front/NotFound'
import Articles from './composants/back/Articles'
import Users from './composants/back/Users'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}  />
          <Route path="creer-profil" element={<CreateProfil />}  />
          <Route path="cycle-vie" element={<CycleVie />}  />
          <Route path='creer-nouveau-profil' element={ <Navigate to="/creer-profil" />} />
          <Route path="erreur" element={<Erreur />}  />
          <Route path="connexion" element={<Connexion />}  />
          <Route path="admin/">
            <Route index element={<Dashboard /> } />
            <Route path="articles" element={<Articles /> } />
            <Route path="users" element={<Users /> } />
          </Route>
          {/** pour la route 404 mettre en dernier */}
          <Route path="/not-found" element={<NotFound />} />
          <Route path='*' element={ <Navigate to="/not-found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// test.com
// test.com/contact
// test.com/article/1
// test.com/article/2
// test.com
// javascript => https://developer.mozilla.org/en-US/docs/Web/API/History_API
