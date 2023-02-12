import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { GetDirectory } from '../services/DataServices';


export default function Directory() {
    const [type, setType] = useState('byfirstname');
    const [input, setInput] = useState('');
    const [data, setData] = useState();
    const [firstName, setFirstName] = useState('Amardeep');
    const [lastName, setLastName] = useState('Mann');
    const [slackName, setSlackName] = useState('Amar');
    const [email, setEmail] = useState('amann@codestack.co');
    const [hobbies, setHobbies] = useState('Kicking rocks');
    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            // setResponse ( await GetDirectory(type, input) );
        }
    }
    const handleClick = async () => {
        setData( await GetDirectory(type, input) );
    }
    useEffect(()=>{
        console.log(data);
        if (data) {
            setFirstName(data.firstName);
            setLastName(data.lastName);
            setSlackName(data.slackName);
            setEmail(data.email);
            setHobbies(data.hobbies);
        }
        },[data]);
    return (
        <>
            <Container fluid className='hero-cont d-flex align-items-center justify-content-center'>
                <h1>Student Directory</h1>
            </Container>

            <Container fluid className="pages-cont">
                <Row className="gx-35">
                    <Col xs={6}>
                        <h2>Select a student:</h2>
                        <select name="students" id="studentList" className="form w-100 inp-fld" type="text" >
                            <option value="Amar">Amar Mann</option>
                            <option value="Danny">Danny Tran</option>
                            <option value="Ken">Ken Martinez</option>
                            <option value="Scott">Scott Morenzone</option>
                        </select>
                        <Row className='sec-row'>
                            <Col>
                                <h2>Or search:</h2>
                                <input name="" id="input" className="form w-100 inp-fld" type="text" placeholder="Amar" onChange={ (e) => {
                                    setInput(e.target.value);
                                }}/>
                            </Col>
                            <Col>
                                <h2>By:</h2>
                                <select name="foods" id="lookupList" className="form w-100 inp-fld " type="text" onChange={ (e) => {
                                    setType(e.target.value);
                                    console.log(type);
                                }}>
                                    <option value="byfirstname">First Name</option>
                                    <option value="bylastname">Last Name</option>
                                    <option value="byslackname">Slack Name</option>
                                    <option value="byemail">E-Mail</option>
                                </select>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Button className="btn btn-dark btn-submit" onClick={ handleClick }>Submit</Button>
                        </Row>
                    </Col>
                    <Col xs={6}>
                        <h2>Output:</h2>
                        <Row>
                            <Col xs={5} className="text-righty">
                                <p className="dir-text">First Name:</p>
                                <p className="dir-text">Last Name:</p>
                                <p className="dir-text">Slack Name:</p>
                                <p className="dir-text">E-Mail:</p>
                                <p className="dir-text">Hobbies:</p>
                            </Col>
                            <Col xs={7} className="text-center">
                                <p className="dir-text">{firstName}</p>
                                <p className="dir-text">{lastName}</p>
                                <p className="dir-text">{slackName}</p>
                                <p className="dir-text">{email}</p>
                                <p className="dir-text">{hobbies}</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}