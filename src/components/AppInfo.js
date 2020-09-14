import React from 'react';

import './styles/About.css'
import background from '../assets/images/containers.jpg'

const AppInfo = () => (
  <body>
    <div>
      <div class="container">
        <img src={background} width="100%"/>
          <div class="centered">
            <h1>Bins App</h1>
          </div>
      </div>
      <div class="smallcontainer">
          <h2>Download App</h2>
      </div>
      <div style={{height:'300px'}}></div>
    </div>
  </body>
)

export default AppInfo
