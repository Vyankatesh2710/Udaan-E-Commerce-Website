import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Home.css'

import P1 from './Images/Paintings/P1.jpg'
import P2 from './Images/Paintings/P2.jpg'
import P7 from './Images/Paintings/P7.jpeg'
function Home() {
  return (
    <div>
      <div className='parallax-section'>
      </div>
      <div class="parallax-section parallax1">
        <div class="grid grid-pad">
          <div class="col-1-1">
            <div class="content content-header">
              <h2>We are Creative Design Agency</h2>
              <p>there is no<br /> greater disability<br />
                in society then the<br /> inability to see a person as more.</p>

              <div className='carousel1'>
                <Carousel prevLabel="PREV" nextLabel="NEXT" interval={5000}>
                  <Carousel.Item>
                    <img src={P1} style={{ height:"250px", width:"400px" }} alt="P1"/>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={P2} style={{ height:"250px", width:"400px" }} alt="P2" />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={P7} style={{ height:"250px", width:"400px" }} alt="P7"/>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
          <div>
            <svg class="curveUpColor" version='1.1' width="100%" height="100" viewBox='0 0 100 100' preserveAspectRatio='none'>
              <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
            </svg>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home