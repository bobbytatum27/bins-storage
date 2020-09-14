import React from 'react';

import './styles/About.css'
import background from '../assets/images/skyline.jpg'
import graphic from '../assets/images/how-bins-works.png'

const About = () => (
  <body>
    <div>
      <div class="container">
        <img src={background} width="100%"/>
          <div class="centered">
            <h1>About Us</h1>
          </div>
      </div>
      <div class="smallcontainer">
          <h2>Our Vision</h2>
          <p>Our goal is to create a unified platform that connects facilities, drivers, and customers through efficient and affordable storage.</p>
      </div>
      <div class="smallcontainer">
          <h2>Why We Exist</h2>
          <p>Storage is a hassle. Moving in or out can be stressful. It requires having a vehicle to carry all your items, find time during storage facility hours, and a possibly far drive through traffic. On the other hand, storage facilities have trouble leasing certain units that are less favorable. This is forgone revenue for the storage company.</p>
          <p class="b">We hope to solve these issue by transforming unwanted units into “valet” units, through our software that will allow for streamlined communication between customers, facilities, and drivers.</p>
      </div>
      <div class="smallcontainer">
          <h2>How Bins Works</h2>
          <p>We offer a software platform that allows traditional storage companies to transform their vacant, undesirable units into new “valet” units. Service for a “valet” unit includes pick-up and delivery of all stored items, allowing the customer to avoid the hassle of accessing the unit in person. Through an app or our website, customers can easily view their items, schedule deliveries/pickups, while facilities can track and process the orders.</p>
      </div>
      <div>
      <img src={graphic}/>
      </div>
      <div style={{height:'300px'}}></div>
    </div>
  </body>
)

export default About
