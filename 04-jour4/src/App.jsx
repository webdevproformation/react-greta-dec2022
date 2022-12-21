import Menu from "./composants/Menu";
import { Container , Row, Col } from "react-bootstrap"
import Todo from "./composants/Todo";
import Exo1 from "./composants/Exo1";

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
      </Row>
    </Container>
  </> );
}

export default App;