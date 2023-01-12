import Nav from "./composants/Nav";
import { Outlet } from "react-router-dom"
import { configureStore } from "@reduxjs/toolkit"

import { reducerArticle  } from "./reducers/reducerArticle"
import { reducerUser } from "./reducers/reducerUser"
import { Provider } from "react-redux"
import thunk from "redux-thunk";
import {getAllArticles} from "./actions/actionArticle"
const store = configureStore({
   reducer : { reducerArticle , reducerUser },
   middleware : [thunk]
})
// log le store 
// console.log(store.getState())
//store.dispatch({ type : "ARTICLE_ADD" , payload : {id : 2 , titre : "Article 2" , contenu : "tutu"} })
store.dispatch(getAllArticles())
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