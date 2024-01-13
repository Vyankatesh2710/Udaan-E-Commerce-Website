import React, { useState } from 'react'
import axios from 'axios';
import { Form, Col, Row, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn, userData } from '../SliceAuth'
import './loginpg.css'

function Register() {
    const [regName, setregName] = useState("")
    const [regEmail, setregEmail] = useState("")
    const [regPassword, setregPassword] = useState("")
    const [regMobNo, setregMobNo] = useState("")
    const [regType, setregType] = useState("")


    const navigation = useNavigate()

    const currUser = useSelector(userData)

    const dispatcher = useDispatch();

    async function onUserSubmit() {
        const user = {
            name: regName,
            emailid: regEmail,
            password: regPassword,
            mobileno: regMobNo,
            type: regType,
        };
        axios
            .post("http://localhost:5000/addUser", user)
            .then((response) => {

                dispatcher(logIn(response.data));
                console.log(response.data)

                if (regType === "Customer") {
                    navigation("/addcustomerprofile")
                } else {
                    navigation("/addartistprofile")
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function onLogin() {
        const urs = {
            usrName: regName,
            usrEmail: regEmail,
            usrPass: regPassword,

            usrType: regType,
            usrMobNo: regMobNo,
        };

        dispatcher(logIn(urs));

        console.log(currUser)

        if (currUser.uType === "Customer") {
            navigation("/addcustomerprofile")

        } else {
            navigation("/addartistprofile")

        }

    }
    return (
        <div className='l1'>

            <div className='w3'>
                <section >
                    <h2 className='h3style'>Registration</h2>
                </section>

                <div>
                    <Row>
                        <Col sm={12} md={6} lg={4}>
                            <Card className='l2' style={{ height: "550px" }}>
                                <h3 style={{
                                    fontFamily: "'Courier New', Courier, monospace", fontSize: "25px",
                                    padding: "10px", color: "white"
                                }}>
                                    Register User
                                </h3>
                                <Form>
                                    <Form.Group>
                                        <Form.Label style={{ color: "white", position: "relative", right: "100px" }}>Full Name</Form.Label>
                                        <Form.Control
                                            className='l3'
                                            onChange={(e) => setregName(e.target.value)} type='Text'
                                            placeholder='Enter Full Name' />
                                    </Form.Group>


                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label style={{ color: "white", position: "relative", right: "100px" }}>Mobile No.</Form.Label>
                                                <Form.Control
                                                    className='l3'
                                                    onChange={(e) => setregMobNo(e.target.value)}
                                                    type='Text' placeholder='Enter Mobile No.' />
                                            </Form.Group>
                                        </Col>

                                        <Col>
                                            <Form.Group>
                                                <Form.Label style={{ color: "white", position: "relative", right: "100px" }}>Email Id</Form.Label>
                                                <Form.Control
                                                    className='l3'
                                                    onChange={(e) => setregEmail(e.target.value)} type='Text'
                                                    placeholder='Enter Email-Id' />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group>
                                        <Form.Label style={{ color: "white", position: "relative", right: "100px" }}>Password</Form.Label>
                                        <Form.Control className='l3'
                                            onChange={(e) => setregPassword(e.target.value)} type='Password'
                                            placeholder='Enter Password' />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label style={{ color: "white", position: "relative", right: "100px" }}>Choose Perfect Notation</Form.Label>
                                        <Row>
                                            <Col>
                                                <Form.Check onChange={(e) => setregType(e.target.value)}
                                                    type='radio' value="Customer" label='Customer' name='abc'
                                                    style={{ color: "white", marginRight: '250px', position: 'relative', left: "50px" }} />
                                            </Col>

                                            <Col>
                                                <Form.Check type='radio' value="Artist"
                                                    onChange={(e) => setregType(e.target.value)} label='Artist'
                                                    name='abc' style={{ color: "white", marginRight: '250px', position: 'relative', left: "50px" }} />
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                    <Button onClick={onUserSubmit} variant='dark'>Submit</Button>
                                </Form>
                            </Card>
                        </Col>
                    </Row>

                </div>
            </div>
        </div >
    )
}

export default Register