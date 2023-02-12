import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { GetAskQuestions } from '../services/DataServices';


export default function AskQuestions() {
    const [name, setName] = useState();
    const [time, setTime] = useState();
    const [response, setResponse] = useState('Hello Amar! You woke up at 10am today? Wild');
    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            setResponse ( await GetAskQuestions(name, time) );
        }
    }
    return (
        <>
            <Container fluid className='hero-cont d-flex align-items-center justify-content-center'>
                <h1>Asking Questions</h1>
            </Container>

            <Container fluid className="pages-cont">
                <Row className="gx-35">
                    <Col xs={6}>
                        <h2>Enter your name:</h2>
                        <input className="form w-100 inp-fld" type="text" placeholder="Amar" value={name} onKeyDown={handleKeyDown} onChange={ (e) => {
                            setName(e.target.value);
                        }}/>
                        <h2 className="sec-row">Time you woke up:</h2>
                        <input className="form w-100 inp-fld" type="text" placeholder="10am" value={time} onKeyDown={handleKeyDown} onChange={ (e) => {
                            setTime(e.target.value);
                        }}/>
                        <Row className="justify-content-center">
                            <Button className="btn btn-dark btn-submit" onClick={ async () => {
                                setResponse( await GetAskQuestions(name, time) );
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
    );
}