import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { additem } from "../cartSlice";
import { useDispatch } from "react-redux";

function AllArtworks() {
  const dispatcher = useDispatch();

  const [artData, setArtData] = useState([]);
  const navi = useNavigate();

  function goToCart() {
    navi("/cart");
  }
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
    <div className='p2'>
      <section>
            <h1 style={{color:'white',fontFamily:'Times new roman'}}>Art Store</h1>
          </section>
      <Container>
        <Row>
          {artData.map((artwork) => {
            return (
              <Col sm={12} md={6} lg={4}>
                <Card style={{backgroundColor:'black'}}>
                  <Card.Img
                    src={"http://localhost:5000".concat(artwork.Images)}
                  />
                  <center>
                    <Button variant='dark' style={{margin:'10px'}}
                      onClick={() => {
                        dispatcher(additem(artwork));
                      }}>
                      Add To Cart
                    </Button>
                  </center>

                </Card>
              </Col>
            );
          })}
        </Row>
        <center>
          <Button onClick={goToCart} variant='dark'>Go To Cart</Button>
        </center>
      </Container>
    </div>
  );
}

export default AllArtworks;
