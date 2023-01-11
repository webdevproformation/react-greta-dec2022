import Nav from "./composants/Nav";
import { Outlet } from "react-router-dom"
import { configureStore } from "@reduxjs/toolkit"

import { reducerArticle as reducer } from "./reducers/reducerArticle"
import { Provider } from "react-redux"
const store = configureStore({ reducer })
// log le store 
// console.log(store.getState())
store.dispatch({ type : "ADD" , payload : {id : 2 , titre : "Article 2" , contenu : "tutu"} })
// console.log(store.getState())

const App = () => {
  return ( <>
    <Provider store={store}>
      <Nav />
      <div className="container">
        <Outlet /> {/** rappel le système de routing d'Angular */}
      </div>
    </Provider>
  </> );
}
 
export default App;