import React, { useState } from 'react'
import { Image, Tab, Tabs, Button } from 'react-bootstrap'
import parallax2 from './Images/parallax2.jpg'
import user1 from './Images/user1.png'
import All from './All'
import Paintings from './Paintings'
import Sketching from './Sketching'
import AddArtWork from './AddArtWork'
import './Profile.css'
import { useNavigate } from 'react-router-dom'

function ArtistProfile() {

  const [key, setkey] = useState('home');

  const navi = useNavigate()

  function goLogOut() {
    navi("/")
  }

  return (
    <div>
      <div>
        <Image src={parallax2} className="Img" />
        <div className='art-header'>
          <Image roundedCircle={true} className="ArtImg" src={user1} />
          <h3>Vyankatesh Arun Mali</h3>
          <Button onClick={goLogOut} variant='dark' style={{ height: '40px', position: 'relative', left: '700px' }}>LogOut</Button>
        </div>
        <div className='tabs-1'>
          <Tabs
            id='controlled-tab-example'
            activeKey={key}
            onSelect={(k) => setkey(k)}
          >
            <Tab eventKey="painting" title="Painting">
              < Paintings />
            </Tab>

            <Tab eventKey="sketching" title="Sketching">
              <Sketching />
            </Tab>

            <Tab eventKey="info" title="All">
              < All />
            </Tab>

            <Tab eventKey="addwork" title="AddWork">
              <AddArtWork />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default ArtistProfile