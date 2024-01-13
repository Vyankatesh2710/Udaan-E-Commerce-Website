import React, { useState } from 'react'
import { Form, Col, Row, Button, Card } from 'react-bootstrap';
import './loginpg.css';
import { AiOutlineUser } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'


import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { logIn } from "../SliceAuth"
import { useDispatch } from 'react-redux';


function Login() {

  const dispatcher = useDispatch()

  const [userEmail, setEmail] = useState("");
  const [userpassword, setUserPassword] = useState("");

  const [userData, setuserData] = useState({})

  const navi = useNavigate()


  function geHome() {
    const user = {
      UserEmailId: userEmail
    };

    axios.post("http://localhost:5000/getuserbyemail", user)
      .then((result) => {
        console.log("Res :", result.data[0]);
        dispatcher(logIn(result.data[0]))
        navi("/")
      }).catch((err) => {
        console.log("Err :", err);
      });
  }

  return (
    <div className='l1'>
      <div className='w3' style={{ width: '500' }}>
        <section >
          <h2 className='h3style'>Registration / Login</h2>
        </section>

        <div>
          <Card className='l2'>
            <h3 style={{
              fontFamily: "'Courier New', Courier, monospace", fontSize: "25px",
              padding: "10px", color: "white"
            }}>
              Login User/Admin
            </h3>

            <Form style={{ margin: '0px' }} >

              <Form.Label style={{ color: "white", position: "relative", right: "100px" }}>
                <AiOutlineUser style={{ position: "relative", bottom: "2px" }} /> User Email
              </Form.Label>

              <Form.Control type='Text'
                placeholder='Enter Email'
                onChange={(e) => { setEmail(e.target.value) }}
                className='l3'
              />

              <Form.Label style={{ color: "white", position: "relative", right: "100px" }}>
                <RiLockPasswordLine style={{ position: "relative", bottom: "2px" }} /> Password
              </Form.Label>
              <Form.Control type='Password'
                placeholder='Enter Password'
                onChange={(e) => { setUserPassword(e.target.value) }}
                className='l3'
              />

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Check type='checkbox' label='Remember me'
                      style={{ color: "white", marginRight: '250px', position: 'relative', left: "50px" }} />
                  </Form.Group>
                </Col>
              </Row>

              <Button style={{ marginRight: "120px" }} variant='dark' onClick={geHome}
              >Login</Button>
              <Button variant='dark'>
                <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>Registration</Link>
              </Button>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Login