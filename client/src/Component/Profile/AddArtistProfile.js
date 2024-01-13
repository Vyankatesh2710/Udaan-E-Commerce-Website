import React, { useState } from 'react'
import axios from 'axios';
import { Container, Card, Form, Button, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';



function AddArtistProfile() {

  const navi = useNavigate()

  const [artistname, setArtistName] = useState("");
  const [artistage, setArtistAge] = useState("");
  const [artistaddress, setArtistAddress] = useState("");
  const [artiststate, setArtistState] = useState("");
  const [artistcity, setArtistCity] = useState("");
  const [artistpin, setArtistPin] = useState("");
  const [artistaadharcard, setArtistAadharcard] = useState("");
  const [artistcertificate, setArtistCertificate] = useState("");
  const [artistprofile, setArtistProfile] = useState("");

  const [pdf, setPdf] = useState("");



  function addartist() {
    const artist = {
      fullname: artistname,
      age: artistage,
      address: artistaddress,
      city: artistcity,
      state: artiststate,
      pin: artistpin,
      aadharcard: artistaadharcard,
      certificate: artistcertificate,
      profpic: artistprofile,

    };
    axios
      .post("http://localhost:5000/addArtist", artist)
      .then((response) => {
        console.log(response)
        navi("/")
      })
      .catch((err) => {
        console.log(err);
      })
  }

  async function handlechangepdf(e) {
    const pdfData = new FormData();
    pdfData.append("pdf", e.target.files[0]);

    axios
      .post("http://localhost:5000/uploadpdf", pdfData)
      .then((res) => {
        console.log("Res :", res.data);
        setArtistCertificate(res.data.filepath)
      })
      .catch((err) => {
        console.log("Err :", err);
      });
  }

  async function handlechangeimage(e) {
    const imgData = new FormData();
    imgData.append("image", e.target.files[0]);

    axios
      .post("http://localhost:5000/uploadimages", imgData)
      .then((res) => {
        console.log("Res :", res.data);
        setArtistAadharcard(res.data.filepath)
      })
      .catch((err) => {
        console.log("Err :", err);
      });
  }


  async function handlechangeimageProf(e) {
    const imgData = new FormData();
    imgData.append("image", e.target.files[0]);

    axios
      .post("http://localhost:5000/uploadimages", imgData)
      .then((res) => {
        console.log("Res :", res.data);
        setArtistProfile(res.data.filepath)
      })
      .catch((err) => {
        console.log("Err :", err);
      });
  }


  return (
    <div className='p2'>
      <section >
        <h2 className='h3style'> Fill Out Artist Details</h2>
      </section>
      <Container>
        <Card className="p1">
          <h3 style={{
            fontFamily: "'Courier New', Courier, monospace", fontSize: "25px",
            padding: "10px", color: "white"
          }}>
            Details
          </h3>
          <Form>
            <Form.Group>
              <Form.Label style={{ color: "white", textAlign: 'center' }}>Full Name</Form.Label>
              <Form.Control type='Text' placeholder='Artist Full Name'
                onChange={(e) => setArtistName(e.target.value)} className='l4' />
            </Form.Group>

            <Form.Group>
              <Form.Label style={{ color: "white", textAlign: 'center' }}>Age</Form.Label>
              <Form.Control className='l4' type='Number' placeholder='Enter Age' onChange={(e) => setArtistAge(e.target.value)} />
            </Form.Group>

            <Form.Group>
              <Form.Label style={{ color: "white", textAlign: 'center' }}>Address</Form.Label>
              <Form.Control className='l4' type='Text' placeholder='Enter Address' onChange={(e) => setArtistAddress(e.target.value)} />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Form.Control type='Text' placeholder='City' onChange={(e) => setArtistCity(e.target.value)} />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group>
                  <Form.Label>State</Form.Label>
                  <Form.Control type='Text' placeholder='State' onChange={(e) => setArtistState(e.target.value)} />
                </Form.Group>

              </Col>

              <Col>
                <Form.Group>
                  <Form.Label>PINCODE</Form.Label>
                  <Form.Control type='Text' placeholder='Enter Pin Code' onChange={(e) => setArtistPin(e.target.value)} />
                </Form.Group>
              </Col>
            </Row>



            <Form.Group>
              <Form.Label style={{ color: "white", textAlign: 'center' }}>Aadhar No.</Form.Label>
              <Form.Control className='l4' type='Text' placeholder='Enter Aadhar Number' onChange={(e) => setArtistAadharcard(e.target.value)} />
            </Form.Group>

            <Form.Group>
              <Form.Label style={{ color: "white", textAlign: 'center' }}>Handicapped Certificate</Form.Label>
              <Form.Control className='l4' type='File' placeholder='Choose A File...' onChange={handlechangepdf} />
            </Form.Group>

            <Form.Group>
              <Form.Label style={{ color: "white", textAlign: 'center' }}>Upload A Profile Picture</Form.Label>
              <Form.Control className='l4' type='File' placeholder='Choose A Picture...'
                onChange={handlechangeimageProf} />
            </Form.Group>

            <Button onClick={addartist} variant='dark' style={{ margin: '10px' }}>Submit</Button>
          </Form>
        </Card>
      </Container>
    </div>
  )
}

export default AddArtistProfile