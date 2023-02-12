import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { GetRestaurantPicker } from '../services/DataServices';

export default function RestaurantPicker() {
    const [type, setType] = useState('');
    const [response, setResponse] = useState('You should try Taco Bell!');
    return (
        <>
            <Container fluid className='hero-cont d-flex align-items-center justify-content-center'>
                <h1>Restaurant Picker</h1>
            </Container>

            <Container fluid className="pages-cont">
                <Row className="gx-35">
                    <Col xs={6}>
                        <h2>Enter your name:</h2>
                        <select className="form w-100 inp-fld" type="text" placeholder="Amar" value={type} onChange={ async (e) => {
                            setType(e.target.value);
                            setResponse( await GetRestaurantPicker(e.target.value) );
                        }}>
                            <option value="mexican">Mexican</option>
                            <option value="asian">Asian</option>
                            <option value="fast-food">Fast-Food</option>
                        </select>

                        <Row className="justify-content-center">
                            <Button className="btn btn-dark btn-submit" onClick={ async () => {
                                setResponse( await GetRestaurantPicker(type) );
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