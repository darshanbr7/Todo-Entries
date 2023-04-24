import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function TodoNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Todo Application </Navbar.Brand>
        
        
          <Nav className="ml-auto">
            
            <Nav.Link > <Link to="/IncompletedTask">Add Task </Link> </Nav.Link>
            <Nav.Link > <Link to="/TaskList"> All Tasks</Link> </Nav.Link>
        
          </Nav>
         
      
      </Container>
    </Navbar>
  );
}

export default TodoNavbar;