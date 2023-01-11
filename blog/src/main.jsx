import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter , Routes , Route } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<>coucou les amis</>}  />
          <Route path="creer-profil" element={<>je crée un profil</>}  />
          <Route path="connexion" element={<></>}  />
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
