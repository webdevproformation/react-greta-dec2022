import Menu from "./composants/Menu";
import { Container , Row, Col } from "react-bootstrap"
import Todo from "./composants/Todo";
import A from "./composants/A";
import Exo1 from "./composants/Exo1";
import Action from "./composants/Action";
import Liste from "./composants/Liste";
import { ListeContextProvider } from "./contexts/listeContext";
import { UserContextProvider } from "./contexts/userContext";
import Connexion from "./composants/Connexion";
import Profil from "./composants/Profil";
import Formulaire from "./composants/Formulaire";
import Compteur from "./composants/Compteur";
import { CompteurContextProvider } from "./contexts/compteurContext";

const App = () => {
  
  return ( <>
    <Menu text="jour4"/>
    <Container>
      <Row>
        <Col xs={4}>
          <Todo />
        </Col>
        <Col xs={4}>
          <Exo1 />
        </Col>
        <Col xs={4}>
          <h2>createContext / useContext</h2>
          {/** j'emballe les deux composants frères avec le ListeContextProvider  */}
          <ListeContextProvider>
            <Action />
            <Liste />
          </ListeContextProvider>
        </Col>
        <Col xs={4}>
          <UserContextProvider>
            <Profil />
            <Connexion />
          </UserContextProvider>
        </Col>
        <Col xs={4}>
          <A />
        </Col>
        <Col xs={4}>
          <CompteurContextProvider>
            {/** // #e #8 */}
            {/** 6 */}
            {/** 2 */}
            <Formulaire />
            {/** 5 */}
            <Compteur />
          </CompteurContextProvider>
        </Col>
      </Row>
    </Container>
  </> );
}

export default App;