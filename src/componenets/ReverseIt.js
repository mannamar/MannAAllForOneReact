import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { GetReverseIt } from '../services/DataServices';

export default function ReverseIt() {
    const [string, setString] = useState('');
    const [response, setResponse] = useState('.drawrof si sihT');
    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            setResponse( await GetReverseIt(string) );
        }
    }
    return (
        <>
            <Container fluid className='hero-cont d-flex align-items-center justify-content-center'>
                <h1>Reverse It</h1>
            </Container>

            <Container fluid className="pages-cont">
                <Row className="gx-35">
                    <Col xs={6}>
                        <h2>Enter your name:</h2>
                        <input className="form w-100 inp-fld" type="text" placeholder="This is forward." value={string} onKeyDown={handleKeyDown} onChange={ (e) => {
                            setString(e.target.value);
                        }}/>
                        <Row className="justify-content-center">
                            <Button className="btn btn-dark btn-submit" onClick={ async () => {
                                setResponse( await GetReverseIt(string) );
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