import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import HomePage from './componenets/HomePage';
import SayHello from './componenets/SayHello'
import AddTwo from './componenets/AddTwo';

function NavBar() {
  return(
    <Navbar className="navbar" variant="dark">
      <Container fluid>
        <Navbar.Brand className='navbar-brand'>AIO</Navbar.Brand>
        <Nav.Link className='nav-link' as={Link} to="/">Home</Nav.Link>
      </Container>
    </Navbar>
  );
}

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='SayHello' element={<SayHello/>}/>
        <Route path='AddTwo' element={<AddTwo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
