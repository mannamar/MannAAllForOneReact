import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { GetGreaterThan } from '../services/DataServices';

export default function GreaterThan() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [response, setResponse] = useState('5 is less than 10');
    return (
        <>
            <Container fluid className='hero-cont d-flex align-items-center justify-content-center'>
                <h1>Greater or Less Than</h1>
            </Container>

            <Container fluid className="pages-cont">
                <Row className="gx-35">
                    <Col xs={6}>
                        <h2>Enter two numbers:</h2>
                        
                        <Row className="justify-content-center">
                            <Row>
                                <Col>
                                    <input className="w-100 inp-fld " type="number" placeholder="5" value={num1} onChange={ (e) => {
                                        setNum1(e.target.value);
                                    }}/>
                                </Col>
                                <Col>
                                    <input className="w-100 inp-fld " type="number" placeholder="10" value={num2} onChange={ (e) => {
                                        setNum2(e.target.value);
                                    }} />
                                </Col>
                            </Row>
                            <Button className="btn btn-dark btn-submit" onClick={ async () => {
                                setResponse( await GetGreaterThan(num1, num2) );
                            }}>Submit</Button>
                        </Row>
                    </Col>
                    <Col xs={6}>
                        <h2>Output:</h2>
                        <p className="output">{response}</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}