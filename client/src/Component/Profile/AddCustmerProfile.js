import React, { useState } from 'react'
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddCustmerProfile() {
  const [custname, setCustName] = useState("");
  const [custaddress, setCustAddress] = useState("");
  const [custstate, setCustState] = useState("");
  const [custcity, setCustCity] = useState("");
  const [custpin, setCustPin] = useState("");

  const navi = useNavigate()

  function addcustomer() {
    const customer = {
      name: custname,
      address: custaddress,
      city: custcity,
      state: custstate,
      pin: custpin,
    };
    axios
      .post("http://localhost:5000/addCustomer", customer)
      .then((response) => {
        console.log(response)
        navi("/")
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <div>
      <div className='p2'>
        <section >
          <h2 className='h3style'> Fill Out customer Details</h2>
        </section>
        <Container>
          <Card className="p1">
          <h3 style={{
            fontFamily: "'Courier New', Courier, monospace", fontSize: "25px",
            padding: "10px", color: "white"
          }}>
            Details
          </h3>
            <Form>
              <Form.Group>
                <Form.Label style={{ color: "white", position: "relative", right: "00px", textAlign: 'center' }}>
                  Enter Customer Full Name
                </Form.Label>
                <Form.Control type='Text' placeholder='Artist Full Name'
                  onChange={(e) => setCustName(e.target.value)} className='l4' />
              </Form.Group>

              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control type='Text' placeholder='Enter Address'
                  onChange={(e) => setCustAddress(e.target.value)} className='l4' />
              </Form.Group>


              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control type='Text' placeholder='City'
                      onChange={(e) => setCustCity(e.target.value)} style={{ marginLeft: '10px' }} />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label>State</Form.Label>
                    <Form.Control type='Text' placeholder='State'
                      onChange={(e) => setCustState(e.target.value)} />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label>PINCODE</Form.Label>
                    <Form.Control type='Text' placeholder='Enter Pin Code'
                      onChange={(e) => setCustPin(e.target.value)} style={{ position: 'relative', right: '10px' }} />
                  </Form.Group>

                </Col>
              </Row>

              <Button onClick={addcustomer} variant='dark' style={{ margin: '10px' }}>Save</Button>
            </Form>
          </Card>
        </Container>
      </div>
    </div>
  )
}

export default AddCustmerProfile