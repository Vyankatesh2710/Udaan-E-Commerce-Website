import {Container , Button, Col, Row } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

import { userData, logOut } from './SliceAuth';
import { useDispatch, useSelector } from 'react-redux';

function Logout() {
    const currUser = useSelector(userData);
    const dispatcher = useDispatch();
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1>
                            Welcome
                        </h1>
                    </Col>

                    <Col>
                        <h1>{currUser.ursName}</h1>
                    </Col>

                    <Col>
                        <Link to="/">
                            <Button onClick={() => dispatcher(logOut())}>LogOut</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default Logout;