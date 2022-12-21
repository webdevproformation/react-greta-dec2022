import Menu from "./composants/Menu";
import { Container , Row, Col } from "react-bootstrap"
import Todo from "./composants/Todo";

const App = () => {
  return ( <>
    <Menu text="jour4"/>
    <Container>
      <Row>
        <Col xs={4}>
          <Todo />
        </Col>
      </Row>
    </Container>
  </> );
}

export default App;