import React from 'react'
import { Button, Card, Col, Container, Form, Row} from 'react-bootstrap'
import {ImageOverlay} from 'react-image-overlay-effect';
import user1 from './Images/user1.png';
import user2 from './Images/user2.png';
import user3 from './Images/user3.png';
import user4 from './Images/user4.png';
import './ArtistList.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function ArtistList() {
  return (
    <div>
      <div className='w2'>
        <section>
          <h2 className='hstyle'>Top Artist</h2>
        </section>
        <Container>
          <Form className='d-flex'>
            <Form.Control
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
              style={{ margin: 'auto', marginLeft: "25px", marginTop: "10px" }}
            />
            <Button variant="outline-success" style={{ margintop: "10px", marginRight: "10px" }}>
              Search
            </Button>
          </Form>
        
         <Container>
          <Row>
            <Col sm={12} md={6} lg={4}>
              <Card>
                <ImageOverlay className='img' src={user1}
                  description={<p className='card-title'>Rita Sonawane <br />Designer</p>}>
                </ImageOverlay>
              </Card>
            </Col>

            <Col>
              <Card>
                <ImageOverlay className='img' src={user2}
                  description={<p className='card-title'>Naturio</p>}>
                </ImageOverlay>
              </Card>
            </Col>

            <Col>
              <Card>
                <ImageOverlay className='img' src={user3}
                  description={<p className='card-title'>Naturio</p>}>
                </ImageOverlay>
              </Card>
            </Col>

            <Col>
              <Card>
                <ImageOverlay className='img' src={user4}
                  description={<p className='card-title'>Naturio</p>}>
                </ImageOverlay>
              </Card>
            </Col>
          </Row>
        </Container>
        </Container>
      </div>
      <div>
        <svg class="curveDownColor"
          version='1.1'
          width="100%" height="100" viewBox='0 0 100 100' preserveAspectRatio='none'>
          <path d="M0 0 C 50 100 80 100 100 0"></path>
        </svg>
      </div>
    </div>
  )
}

export default ArtistList