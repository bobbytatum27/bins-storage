import React from 'react';

import './styles/styles.css'
import background from '../assets/images/building2.jpg'
import appStoreButton from '../assets/images/app-store-button.png'
import googleStoreButton from '../assets/images/google-play-button.png'

const Faq = () => (
  <body>
      <div class="container">
        <img src={background} width="100%"/>
          <div class="centered">
            <h1>FAQ</h1>
          </div>
      </div>
      <div class="smallcontainer">
          <h2 class='b'>General</h2>
          <h6>What is Bins Storage?</h6>
          <p>Bins is a platform that connects storage facilities, customers, and drivers. Our platform facilitates valet/full-service storage, offering tenants the option to have items picked up or delivered, removing the hassle of having to lift or drive.</p>
          <h6>Where is Bins Offered?</h6>
          <p>You can store items in any of the storage facilities that have partnered with Bins. Currently, we are in the San Francisco Bay area, but we are planning on expanding to other regions soon.</p>
          <h6>What’s the difference between valet storage and self storage?</h6>
          <p>With self storage, the tenant is responsible for everything - packing, driving, and moving into the unit. With valet storage, drivers will pick up or deliver your items, removing the need to physically go to the storage facility.</p>
          <h6>How do I get started?</h6>
          <p>Download our app and follow the instructions to get started.</p>

          <h2 class='b'>Pricing and Payments</h2>
          <h6>How much does storage cost?</h6>
          <p>Bins offers a variety of different plans and options, so tenants can browse and select a plan that works best for them.</p>
          <h6>When will I be billed?</h6>
          <p>You will be charged on the day your items are moved into storage, and monthly thereafter. You will also be charged for new pickups and deliveries.</p>
          <h6>How do I pay?</h6>
          <p>We accept payment from most major credit cards.</p>

          <h2 class='b'>Storing Items</h2>
          <h6>What size are the bins?</h6>
          <p>All bins are 60cm x 40cm x 31.5cm.</p>
          <h6>Can you store large or bulky items?</h6>
          <p>Yes, you can store furniture and other large items with us.</p>

          <h2 class='b'>Orders</h2>
          <h6>How Do I Request an Order?</h6>
          <p>Simply navigate to your items and select the items that you’d like to store or have returned. Then, schedule your appointment and we'll come by to pick up/drop off your items.</p>
          <h6>How Do I Create a New Bin?</h6>
          <p>First, pack up a bin with the belongings you want. Then, under "Items with You", you can create a new item by taking a photo and adding a description. Now it will be ready to be picked up and stored.</p>
          <h6>How Much Does an Order Cost?</h6>
          <p>Each facility will have their own delivery costs. Typically, the initial pick-up is free, and any orders after that are $20.</p>
          <h6>How Do I Cancel an Order?</h6>
          <p>You can call or email to cancel an order. All orders must be canceled 24 hours before the scheduled time.</p>
      </div>
      <div class="buttoncontainer">
        <h5>Coming Soon</h5>
        <a /*href="https://www.apple.com/app-store/"*/ class='appbutton'><img src={appStoreButton} width="300px"/></a>
        <a /*href="https://play.google.com/store?hl=en_US.com/"*/ class='appbutton'><img src={googleStoreButton} width="300px"/></a>
      </div>
      <div class="bottom">
        <p class="c">© 2020 Bins Storage, Inc.</p>
      </div>
  </body>
)

export default Faq
