import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

function All() {
  const [artData, setArtData] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:5000/getAllArtwork")
      .then((response) => {
        console.log(response.data);
        setArtData(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {artData.map((artwork) => {
            return (
              <Col sm={12} md={6} lg={4}>
                <Card className='A1'>
                  <Card.Img src={"http://localhost:5000"
                  .concat(artwork.Images)} />
 
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  )
}

export default All