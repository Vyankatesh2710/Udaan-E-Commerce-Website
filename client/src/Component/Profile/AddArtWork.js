import axios from 'axios';
import React, { useState } from 'react'
import { Row, Button, Col, Container, Form } from 'react-bootstrap'

function AddArtWork() {
  const [artworkname, setName] = useState("");
  const [artworktype, setType] = useState("");
  const [artworkimage, setImage] = useState("");
  const [artworkprice, setPrice] = useState("");

  function addwork() {
    const art = {
      name: artworkname,
      type: artworktype,
      images: artworkimage,
      price: artworkprice
    };
    axios
      .post("http://localhost:5000/addartwork", art)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  async function handlechangeimage(e) {
    const imgData = new FormData();
    imgData.append("image", e.target.files[0]);

    axios
      .post("http://localhost:5000/uploadimages", imgData)
      .then((res) => {
        console.log("Res :", res.data);
        setImage(res.data.filepath)
      })
      .catch((err) => {
        console.log("Err :", err);
      });
  }

  return (
    <div>
      <Container>
        <Form onSubmit={addwork}>
          <Row>
            <Col>
              <Form.Label>Artwork Name</Form.Label>
              <Form.Control className='artwork'
                type='Text' value={artworkname}
                placeholder="Enter Artwork Name"
                onChange={(e) => setName(e.target.value)} />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>Artwork Type</Form.Label>
              <Form.Select className='art'
                value={artworktype}
                onChange={(e) => setType(e.target.value)}>
                <option>Select</option>
                <option>Paintings</option>
                <option>Sketchings</option>
              </Form.Select>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>Artwork Images</Form.Label>
              <Form.Control
                className='work' type='File' placeholder='Images'
                onChange={handlechangeimage}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>Artwork Price</Form.Label>
              <Form.Control
                className='addwork' value={artworkprice} type="Text"
                placeholder='Enter Price'
                onChange={(e) => setPrice(e.target.value)}
              />
            </Col>
          </Row>

          <Button type='submit' className='m-1'>
            Add
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default AddArtWork