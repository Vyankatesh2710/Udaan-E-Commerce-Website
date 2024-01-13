import React, { useState } from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


import { useDispatch } from 'react-redux';
import { logIn } from './SliceAuth';

function Login() {
    const dispatcher = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function onLogin() {
        const urs = {
            usrName: name,
            usrEmail: email,
            usrPass: password,
        };

        dispatcher(logIn(urs));
    }

    return (
        <div>
            <Container>
                <Form >
                    <h1>Login Here</h1>
                    <Row>
                        <Col>
                            <Form.Control
                                type='Text'
                                placeholder='Enter UserName'
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Col>

                        <Col>
                            <Form.Control
                                type='Text'
                                placeholder='Enter User Email'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Col>

                        <Col>
                            <Form.Control
                                type='Password'
                                placeholder='Enter User Password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Col>

                        <Col>
                            <Link to='/logout'>
                                <Button
                                    onClick={() => {
                                        onLogin();
                                    }}
                                >
                                    Login
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
}

export default Login;