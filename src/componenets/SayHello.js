import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { GetHello } from '../services/DataServices';

export default function SayHello() {
    const [name, setName] = useState('');
    const [response, setResponse] = useState('Good day to you Amar!');
    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            setResponse( await GetHello(name) );
            setName('');
        }
    }
    return (
        <>
            <Container fluid className='hero-cont d-flex align-items-center justify-content-center'>
                <h1>Say Hello</h1>
            </Container>

            <Container fluid className="pages-cont">
                <Row className="gx-35">
                    <Col xs={6}>
                        <h2>Enter your name:</h2>
                        <input className="form w-100 inp-fld" type="text" placeholder="Amar" value={name} onKeyDown={handleKeyDown} onChange={ (e) => {
                            setName(e.target.value);
                        }}/>
                        <Row className="justify-content-center">
                            <Button className="btn btn-dark btn-submit" onClick={ async () => {
                                setResponse( await GetHello(name) );
                                setName('');
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