import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import All from './All'
import Paintings from './Paintings'
import Sketching from './Sketching'
import './Work.css'

function Work() {
  const [key, setkey] = useState('home');
  return (
    <div>
      <div className='w1'>
        <section>
          <h2 className='h2style'>Recent Work</h2>
        </section>


        <div>
          <div>
            <Tabs id='controlled-tab-example'
              activeKey={key}
              onSelect={(k) => setkey(k)} className='tab-list'>
              <Tab eventKey="all" title="All" >
                <All />
              </Tab>

              <Tab eventKey="paintings" title="Paintings" style={{  }}>
                <Paintings />
              </Tab>

              <Tab eventKey="sketching" title="Sketching">
                <Sketching />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
      <div>
        <svg className='curveUpColor' version='1.1' width="100%"
          height="100" viewBox='0 0 100 100' preserveAspectRatio='none'>
          <path d='M0 100 C 20 0 50 0 100 100 Z4'></path>
        </svg>
      </div>

    </div>
  )
}

export default Work

/*<div class="recent-wrap" id='work'>
<section class="grid grid-pad">
  <h2>Recent Work</h2>
  <div class="col-1-1 mix">
    <ul class="filters">
      <li class="filter active" data-filter="all">All</li>
      <li class="filter" data-filter=".paintings">Paintings</li>
      <li class="filter" data-filter="sketching">Sketching</li>
    </ul>
  </div>
</section>
</div>*/