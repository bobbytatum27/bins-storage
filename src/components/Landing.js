import React from 'react';

import './styles/styles.css'
import background from '../assets/images/moving.jpg'
import facility from '../assets/images/033-storage.png'
import tenant from '../assets/images/022-order-1.png'

import appStoreButton from '../assets/images/app-store-button.png'
import googleStoreButton from '../assets/images/google-play-button.png'

const Landing = () => (
        <body>
          <div>
            <div class="container">
              <img src={background} width="100%"/>
                <div class="centered">
                  <h1>Storage Virtualized</h1>
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
                <p>Contact us to become a storage partner.</p>
              </div>
              <div class="box">
                <img src={tenant} width="50%"/>
                <h4>Tenants</h4>
                <p>Our app provides tenants with the ability to virtually view items in storage, then schedule deliveries.</p>
                <p>Bins provides convinence and eliminates the need to pack, lift, or drive. Customers can see everything in storage without having to dig through their unit.</p>
                <p>Get started today by downloading our app.</p>
              </div>
            </div>
            <div class="buttoncontainer">
              <h5>Coming Soon</h5>
              <a /*href="https://www.apple.com/app-store/"*/ class='appbutton'><img src={appStoreButton} width="300px"/></a>
              <a /*href="https://play.google.com/store?hl=en_US.com/"*/ class='appbutton'><img src={googleStoreButton} width="300px"/></a>
            </div>
            <div class="bottom">
              <p class="c"> Copyright © Bins Storage Inc. All Rights Reserved.</p>
            </div>
          </div>
        </body>
)

export default Landing;
