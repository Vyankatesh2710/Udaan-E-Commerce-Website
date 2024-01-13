import React, { useState,useEffect } from "react";
import axios from "axios";
import {  Card, Col, Container, Row } from "react-bootstrap";


function Artgallery() {
  const [artData, setArtData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getAllArtwork")
      .then((response) => {
        console.log(response.data);
        setArtData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="p2">
      <Container>
        <Row>
          <section>
            <h1 style={{color:'white',fontFamily:'Times new roman'}}>Art  Gallery</h1>
          </section>
          {artData.map((artwork) => {
            return (
              <Col sm={12} md={6} lg={4}>
                <Card >
                  <Card.Img
                    src={"http://localhost:5000".concat(artwork.Images)}
                  />
                </Card>
              </Col>
            );
          })}
        </Row>
        
      </Container>
    </div>
  );
}

export default Artgallery