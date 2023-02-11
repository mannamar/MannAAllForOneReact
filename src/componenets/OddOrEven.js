import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { GetOddOrEven } from '../services/DataServices';

export default function OddOrEven() {
    const [num, setNum] = useState('');
    const [response, setResponse] = useState('10 is an even number');
    return (
        <>
            <Container fluid className='hero-cont d-flex align-items-center justify-content-center'>
                <h1>Odd or Even</h1>
            </Container>

            <Container fluid className="pages-cont">
                <Row className="gx-35">
                    <Col xs={6}>
                        <h2>Enter your name:</h2>
                        <input className="form w-100 inp-fld" type="number" placeholder="10" onChange={ (e) => {
                            setNum(e.target.value);
                        }}/>
                        <Row className="justify-content-center">
                            <Button className="btn btn-dark btn-submit" onClick={ async () => {
                                setResponse( await GetOddOrEven(num) );
                                } }>Submit</Button>
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