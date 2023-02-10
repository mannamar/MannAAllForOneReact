import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';

export default function AddTwo() {

    return (
        <>
            <Container fluid className='hero-cont d-flex align-items-center justify-content-center'>
                <h1>Say Hello</h1>
            </Container>

            <Container fluid className="pages-cont">
                <Row className="gx-35">
                    <Col xs={6}>
                        <h2>Enter two numbers:</h2>
                        
                        <Row className="justify-content-center">
                            <Row>
                                <Col>
                                    <input className="w-100 inp-fld " type="number" placeholder="5"/>
                                </Col>
                                <Col>
                                    <input className="w-100 inp-fld " type="number" placeholder="100"/>
                                </Col>
                            </Row>
                        </Row>
                    </Col>
                    <Col xs={6}>
                        <h2>Output:</h2>
                        <p className="output"></p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}