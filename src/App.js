import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import HomePage from './componenets/HomePage';
import SayHello from './componenets/SayHello'
import AddTwo from './componenets/AddTwo';
import AskQuestions from './componenets/AskQuestions';
import GreaterThan from './componenets/GreaterThan';
import OddOrEven from './componenets/OddOrEven';
import ReverseIt from './componenets/ReverseIt';

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
        <Route path='AskQuestions' element={<AskQuestions/>}/>
        <Route path='GreaterThan' element={<GreaterThan/>}/>
        <Route path='OddOrEven' element={<OddOrEven/>}/>
        <Route path='ReverseIt' element={<ReverseIt/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
