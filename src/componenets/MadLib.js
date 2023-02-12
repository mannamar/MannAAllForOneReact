import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { GetMadLib } from '../services/DataServices';


export default function MadLib() {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');
    const [input5, setInput5] = useState('');
    const [input6, setInput6] = useState('');
    const [input7, setInput7] = useState('');
    const [input8, setInput8] = useState('');
    const [input9, setInput9] = useState('');
    const [input10, setInput10] = useState('');
    const [response, setResponse] = useState('Fill out the text fields on the left for a cool story bro');
    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            setResponse('Loading...');
            setResponse ( await GetMadLib(input1, input2, input3, input4, input5, input6, input7, input8, input9, input10) );
        }
    }
    return (
        <>
            <Container fluid className='hero-cont d-flex align-items-center justify-content-center'>
                <h1>Mad Lib</h1>
            </Container>

            <Container fluid className="pages-cont">
                <Row className="gx-35">
                    <Col xs={6}>

                        <Row className="justify-content-center">
                            <Col className='text-righty'>
                                <h3>Name:</h3>
                            </Col>
                            <Col>
                                <input name="" className="form w-100 mad-inp-fld" type="text" placeholder="Jimmy G." onKeyDown={handleKeyDown} onChange={ (e) => {
                                    setInput1(e.target.value);
                                }}/>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col className='text-righty'>
                                <h3>Adj:</h3>
                            </Col>
                            <Col>
                                <input name="" className="form w-100 mad-inp-fld" type="text" placeholder="dreadful" onKeyDown={handleKeyDown} onChange={ (e) => {
                                    setInput2(e.target.value);
                                }}/>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col className='text-righty'>
                                <h3>Noun:</h3>
                            </Col>
                            <Col>
                                <input name="" className="form w-100 mad-inp-fld" type="text" placeholder="lint-licker" onKeyDown={handleKeyDown} onChange={ (e) => {
                                    setInput3(e.target.value);
                                }}/>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col className='text-righty'>
                                <h3>Band:</h3>
                            </Col>
                            <Col>
                                <input name="" className="form w-100 mad-inp-fld" type="text" placeholder="3-6 Mafia" onKeyDown={handleKeyDown} onChange={ (e) => {
                                    setInput4(e.target.value);
                                }}/>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col className='text-righty'>
                                <h3>Adj:</h3>
                            </Col>
                            <Col>
                                <input name="" className="form w-100 mad-inp-fld" type="text" placeholder="stupid" onKeyDown={handleKeyDown} onChange={ (e) => {
                                    setInput5(e.target.value);
                                }}/>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col className='text-righty'>
                                <h3>Adj:</h3>
                            </Col>
                            <Col>
                                <input name="" className="form w-100 mad-inp-fld" type="text" placeholder="handsome" onKeyDown={handleKeyDown} onChange={ (e) => {
                                    setInput6(e.target.value);
                                }}/>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col className='text-righty'>
                                <h3>Noun:</h3>
                            </Col>
                            <Col>
                                <input name="" className="form w-100 mad-inp-fld" type="text" placeholder="toothbrush" onKeyDown={handleKeyDown} onChange={ (e) => {
                                    setInput7(e.target.value);
                                }}/>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col className='text-righty'>
                                <h3>Noun (-pl):</h3>
                            </Col>
                            <Col>
                                <input name="" className="form w-100 mad-inp-fld" type="text" placeholder="mushrooms" onKeyDown={handleKeyDown} onChange={ (e) => {
                                    setInput8(e.target.value);
                                }}/>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col className='text-righty'>
                                <h3>Adj:</h3>
                            </Col>
                            <Col>
                                <input name="" className="form w-100 mad-inp-fld" type="text" placeholder="fuzzy" onKeyDown={handleKeyDown} onChange={ (e) => {
                                    setInput9(e.target.value);
                                }}/>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col className='text-righty'>
                                <h3>Verb (-ing):</h3>
                            </Col>
                            <Col>
                                <input name="" className="form w-100 mad-inp-fld" type="text" placeholder="smiling" onKeyDown={handleKeyDown} onChange={ (e) => {
                                    setInput10(e.target.value);
                                }}/>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Button className="btn btn-dark btn-submit mt-0" onClick={ async () => {
                                setResponse('Loading...')
                                setResponse( await GetMadLib(input1, input2, input3, input4, input5, input6, input7, input8, input9, input10) );
                            } }>Submit</Button>
                        </Row>
                    </Col>
                    <Col xs={6}>
                        <h2>Output:</h2>
                        <p className="mad-text">{response}</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}