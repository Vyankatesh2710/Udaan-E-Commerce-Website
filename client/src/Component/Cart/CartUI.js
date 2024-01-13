import React from 'react'
import { Col, Row, Container, Card, Image } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import user1 from '../Images/user1.png'
import { BsFillArrowUpCircleFill,BsFillArrowDownCircleFill } from 'react-icons/bs'

import './cart.css'
function CartUI() {
  return (
    <div className='c1'>
      <Row>
        <Col>
          <h2 style={{ position: "relative", left: "50%" }}>Cart</h2>
        </Col>

        <Col>
          <h3 style={{ position: "relative", left: "50%", top: '4px', color: 'white', cursor: 'pointer' }}>
            < AiOutlineShoppingCart />
          </h3>
        </Col>
      </Row>

      <Container>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <Card className='c2'>
              <Row>
                <Col>
                  <Card.Img className='img123' src={user1} />
                </Col>

                <Col>
                  <h2 className='c3'>
                    Vyankatesh A. Mali <br /> Price :- RS.100 <br/> Quantity :- 1
                  </h2>
                </Col>
              </Row>
              <h1 className='c4'> <BsFillArrowUpCircleFill /> </h1>
              <h1 className='c5'> <BsFillArrowDownCircleFill /> </h1>

            </Card>
          </Col>
        </Row>


      </Container>

    </div>
  )
}

export default CartUI