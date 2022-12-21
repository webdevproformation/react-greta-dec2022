import {Nav , Container} from "react-bootstrap"

const Menu = ({text}) => {
    return ( 
        <div className="bg-success">
            <Nav>
                <Container>
                    <Nav.Item>
                        <Nav.Link className="text-white fs-3">
                            {text}
                        </Nav.Link>
                    </Nav.Item>
                </Container>
            </Nav>
        </div>  
     );
}
 
export default Menu;

// rdv 10h55 bon café !!!