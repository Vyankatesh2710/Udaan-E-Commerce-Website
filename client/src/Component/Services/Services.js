import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import './Services.css'
import { RiHeartsFill, RiStarSmileFill } from 'react-icons/ri'
import { MdOutlineDeveloperMode } from 'react-icons/md'
import { FaUserFriends } from 'react-icons/fa'
import { BsShop } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { GrGallery } from 'react-icons/gr'

function Services() {
  return (
    <div>
      <div className='s1'>
        <div  >
          <section>
            <h2 className='h2style1'>Our Services</h2>

            <Row>
              <Col>
                <div>
                  <div>
                    <BsShop className='icons' />
                  </div>
                  <div>
                    <h3 style={{ padding: "10px" }} variant='dark'>Art-Bazar</h3>
                    <p> Every gr8 design begins<br /> with an even <br />better story</p>
                    <Button style={{ margin: "10px" }} variant='dark'>
                      <Link to="/store" style={{ textDecoration: 'none', color: 'white' }}>
                        Go To Store
                      </Link>
                    </Button>
                  </div>
                </div>
              </Col>

              <Col>
                <div  >
                  <div >
                    <div >
                      <RiStarSmileFill className='icons' />
                    </div>
                    <div >
                      <h3 style={{ padding: "10px" }}>Great Concept</h3>
                      <p>
                        Good, better, best. Never let it<br /> rest. 'Til your good is better and<br /> your better is best.
                      </p>
                      <Button style={{ margin: "10px" }} variant='dark'>Read More</Button>

                    </div>
                  </div>
                </div>
              </Col>

              <Col>
                <div >
                  <div >
                    <div >
                      <GrGallery className='icons' />
                    </div>
                    <div >
                      <h3 style={{ padding: "10px" }}>Art Gallery</h3>
                      <p>
                        If you truly want to be respected by people you love,
                        you must prove to them that you can survive without them.
                      </p>
                      <Button variant='dark' style={{ position: 'relative', top: '10px' }} >
                        <Link to="/artgallery" style={{ textDecoration: 'none', color: 'white' }}>
                          Art-Gallery
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>

              <Col>
                <div>
                  <div >
                    <div>
                      <FaUserFriends className='icons' />
                    </div>
                    <div >
                      <h3 style={{ padding: "10px" }}>User Friendly</h3>
                      <p>
                        Don't make friends who are comfortable to be with.
                        Make friends who will force you to lever yourself up
                      </p>
                      <Button style={{ margin: "10px" }} variant='dark'>Read More</Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </section>
        </div>
      </div >

      <svg class="curveDownColor"
        version="1.1"
        width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 0 C 50 100 80 100 100 0 Z"></path>
      </svg>
    </div>

  )
}

export default Services