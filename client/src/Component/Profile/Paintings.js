import React, { useState, useEffect } from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import axios from 'axios';

function Paintings() {
  const [artData, setArtData] = useState([]);

  useEffect(() => {
    const reqData = {
      Type: "Paintings"
    }
    axios
      .post("http://localhost:5000/getartworkbyType", reqData)
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

export default Paintings