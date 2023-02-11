import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <>
        <Container fluid className='hero-cont d-flex align-items-center justify-content-center'>
            <h1>Pick Your Poison</h1>
        </Container>

        <Container fluid className='btn-cont'>

            <Row>
                <Col xs={6}>
                <Button className="btn btn-dark btn-main" as={Link} to="SayHello">Say Hello</Button>
                </Col>
                <Col xs={6}>
                <Button className="btn btn-dark btn-main" as={Link} to="AddTwo">Add Two Numbers</Button>
                </Col>
            </Row>

            <Row>
                <Col xs={6}>
                <Button className="btn btn-dark btn-main" as={Link} to="AskQuestions">Asking Questions</Button>
                </Col>
                <Col xs={6}>
                <Button className="btn btn-dark btn-main" as={Link} to="GreaterThan">Greater or Less Than</Button>
                </Col>
            </Row>

            <Row>
                <Col xs={6}>
                <Button className="btn btn-dark btn-main">Mad Lib</Button>
                </Col>
                <Col xs={6}>
                <Button className="btn btn-dark btn-main">Odd or Even</Button>
                </Col>
            </Row>

            <Row>
                <Col xs={6}>
                <Button className="btn btn-dark btn-main">Reverse It</Button>
                </Col>
                <Col xs={6}>
                <Button className="btn btn-dark btn-main">Student Directory</Button>
                </Col>
            </Row>

            <Row>
                <Col xs={3}></Col>
                <Col xs={6}>
                <Button className="btn btn-dark btn-main">Student Directory</Button>
                </Col>
                <Col xs={3}></Col>
            </Row>

        </Container>
        </>
    );
}