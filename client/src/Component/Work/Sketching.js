import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import sketch1 from './Images/Sketches/sketch1.jpg';
import sketch2 from './Images/Sketches/sketch2.jpg';
import sketch3 from './Images/Sketches/sketch3.jpg';
import sketch4 from './Images/Sketches/sketch4.jpg';
import sketch5 from './Images/Sketches/sketch5.jpg';

function Sketching() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Img className='img' src={sketch1}/>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Img className='img' src={sketch2}/>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Img className='img' src={sketch3}/>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Img className='img' src={sketch4}/>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Img className='img' src={sketch5}/>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Sketching