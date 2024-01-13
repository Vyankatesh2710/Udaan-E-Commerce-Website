import React, { useState } from 'react'
import { Button, Card, Col, Container, Row, Modal, Form } from 'react-bootstrap'

function Orders() {
  const [isShow, setIsShow] = useState(false)

  function onShowDialog() {
    setIsShow(true)
  };

  function onHideDialog() {
    setIsShow(false)
  };

  return (
    <div>
      <Form className="d-flex">
            <Form.Control 
              type="search"
              placeholder="Search"

              className="me-2"
              aria-label="Search"
              style={{margin:'auto', marginLeft:"25px" , marginTop:"10px"}}
            />
            <Button variant="outline-success" style={{marginTop:"10px" , marginRight:"10px"}}>Search</Button>
          </Form>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <Card className='card1'>
              <Card.Body>
                <Card.Title>Vyankatesh A. Mali</Card.Title>
                <Card.Subtitle>Total Amount</Card.Subtitle>
                <Card.Text style={{color:'white',textAlign:'center'}}>Status</Card.Text>
                <Button style={{ display: 'flex', marginLeft: "auto" }}
                  color="primary"
                  onClick={onShowDialog}
                >Details</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal show={isShow} onHide={onHideDialog} >
        <Modal.Header closeButton >
          <Modal.Title>Vyankatesh A. Mali</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group>
            <Form.Label>Customer Name</Form.Label>
            <Form.Control type='Text' placeholder='' />
          </Form.Group>

          <Form.Group>
            <Form.Label>Customer Address</Form.Label>
            <Form.Control type='Text' placeholder='' />
          </Form.Group>

          <Form.Group>
            <Form.Label>Order Date</Form.Label>
            <Form.Control type='Date' placeholder='' />
          </Form.Group>

          <Form.Group>
            <Form.Label>Order Amount</Form.Label>
            <Form.Control type='Amount' placeholder='' />
          </Form.Group>

          <Form.Group>
            <Form.Label>Total Items</Form.Label>
            <Form.Control type='Items' placeholder='' />
          </Form.Group>

          <Form.Label>Status</Form.Label>

          <Row>
            <Col>
              <Form.Group>
                <Form.Check name='OrderStatus' type='radio' id='Approved' label='Approved' />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Check name='OrderStatus' type='radio' id='Delivered' label='Delivered' />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Check name='OrderStatus' type='radio' id='Canceled' label='Canceled' />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Check name='OrderStatus' type='radio' id='Pending' label='Pending' />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Check name='OrderStatus' type='radio' id='In-Transit' label='In-Transit'  />
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={onHideDialog}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Orders
