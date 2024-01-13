import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import P1 from './Images/Paintings/P1.jpg';
import P2 from './Images/Paintings/P2.jpg';
import P3 from './Images/Paintings/P3.jpg';
import P4 from './Images/Paintings/P4.jpg';
import P5 from './Images/Paintings/P5.webp';

import './Work.css';

function Paintings() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Img className='img' src={P1}/>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Img className='img' src={P2}/>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Img className='img' src={P3}/>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Img className='img' src={P4}/>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Img className='img' src={P5}/>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Paintings