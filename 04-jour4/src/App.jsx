import Menu from "./composants/Menu";
import { Container , Row, Col } from "react-bootstrap"
import Todo from "./composants/Todo";
import Exo1 from "./composants/Exo1";
import Action from "./composants/Action";
import Liste from "./composants/Liste";
import { ListeContextProvider } from "./contexts/listeContext";

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
      </Row>
    </Container>
  </> );
}

export default App;