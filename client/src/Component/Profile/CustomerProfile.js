import React, { useState } from 'react'
import { Image,Tab, Tabs } from 'react-bootstrap'
import parallax2 from './Images/parallax2.jpg'
import user3 from './Images/user3.png'
import Orders from './Orders'
import './Profile.css'

function CustomerProfile() {
  const [key,setkey]=useState('home');
  return (
    <div>
      <div>
        <Image src={parallax2} className="Img"/>
        <div className='art-header'>
          <Image roundedCircle={true} className="ArtImg" src={user3}/>
          <h3>Rita D. Sonawane</h3>
        </div>
        <div className='tabs-1'>
          <Tabs
            id='controlled-tab-example'
            activeKey={key}
            onSelect={(k)=>setkey(k)}
          >
            <Tab eventKey="Orders" title="Orders">
              <Orders />
            </Tab>

            <Tab eventKey="Profile" title="Profile">
              Hiiiii
            </Tab>

          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default CustomerProfile