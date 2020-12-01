import React from 'react';

import './styles/styles.css'
import background from '../assets/images/skyline.jpg'
import graphic from '../assets/images/how-bins-works2.png'
import appStoreButton from '../assets/images/app-store-button.png'
import googleStoreButton from '../assets/images/google-play-button.png'

const About = () => (
  <body>
      <div class="container">
        <img src={background} width="100%"/>
          <div class="centered">
            <h1>About Us</h1>
          </div>
      </div>
      <div class="smallcontainer">
          <h2 class="a">Our Vision</h2>
          <p class="a">Our goal is to create a unified platform that connects facilities, drivers, and customers through efficient and affordable storage.</p>
      </div>
      <div class="smallcontainer">
          <h2 class="a">Why We Exist</h2>
          <p class="a">Storage is a hassle. Moving in or out can be stressful. It requires having a vehicle to carry all your items, find time during storage facility hours, and a possibly far drive through traffic. On the other hand, storage facilities have trouble leasing certain units that are less favorable. This is forgone revenue for the storage company.</p>
          <p class="b">We hope to solve these issues by transforming unwanted units into “valet” units, making storage easy for tenants and storage facilities.</p>
      </div>
      <div class="smallcontainer">
          <h2 class="a">How Bins Works</h2>
          <p class="a">Through our app, tenants can find a storage facility, view stored items, and request deliveries or pickups. Our technology helps coordinate communication between the tenant, facility, and drivers, making the process seamless and simple.</p>
      </div>
      <div class="graphicontainer">
      <img src={graphic} width= "75%"/>
      </div>
      <div class="buttoncontainer">
        <h5>Coming Soon</h5>
        <a /*href="https://www.apple.com/app-store/"*/ class='appbutton'><img src={appStoreButton} width="300px"/></a>
        <a /*href="https://play.google.com/store?hl=en_US.com/"*/ class='appbutton'><img src={googleStoreButton} width="300px"/></a>
      </div>
      <div class="bottom">
        <p class="c"> © 2020 Bins Storage, Inc.</p>
      </div>
  </body>
)

export default About
