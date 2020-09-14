import React from 'react';

import './styles/Landing.css'
import background from '../assets/images/moving.jpg'
import facility from '../assets/images/033-storage.png'
import tenant from '../assets/images/022-order-1.png'

const Landing = () => (
        <body>
          <div>
            <div class="container">
              <img src={background} width="100%"/>
                <div class="centered">
                  <h1>Bins Storage</h1>
                  <h3>Storage Virutalized</h3>
                </div>
            </div>
            <div class="smallcontainer">
                <h2>We create efficiencies through our technology</h2>
                <p>Our platform helps traditional storage facilities transform their vacancies into valet style units, more effectively monetizing these spaces. Bins provides the software for communication and organization that makes this possible, improving storage for both businesses and customers.</p>
            </div>
            <div class="graycontainer">
              <div class="box">
                <img src={facility} width="50%"/>
                <h4>Facilities</h4>
                <p>Bins provides storage facilities with the technology and management system to implement valet storage.</p>
                <p>Companies can increase revenues by filling vacancies and expanding their market radius. All of it comes without any additional costs for the facility.</p>
                <button class="button">Contact Us</button>
              </div>
              <div class="box">
                <img src={tenant} width="50%"/>
                <h4>Tenants</h4>
                <p>Our app provides tenants with the ability to virtually view items in storage, then schedule deliveries.</p>
                <p>Bins provides convinence and eliminates the need to pack, lift, or drive. Customers can see everything in storage without having to dig through their unit.</p>
                <button class="button">Download App</button>
              </div>
            </div>
            <div style={{height:'300px'}}></div>
          </div>
        </body>
)

export default Landing;
