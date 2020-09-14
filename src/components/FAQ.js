import React from 'react';

import './styles/About.css'
import background from '../assets/images/building.jpg'

const Faq = () => (
  <body>
    <div>
      <div class="container">
        <img src={background} width="100%"/>
          <div class="centered">
            <h1>FAQs</h1>
          </div>
      </div>
      <div class="smallcontainer">
          <h2>FAQs</h2>
      </div>
      <div style={{height:'300px'}}></div>
    </div>
  </body>
)

export default Faq
