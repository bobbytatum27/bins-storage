import React from 'react';

import './styles/styles.css'
import background from '../assets/images/trees.png'
import appStoreButton from '../assets/images/app-store-button.png'
import googleStoreButton from '../assets/images/google-play-button.png'

export default class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            emailSent: false,
            name: '',
            email: '',
            message: '',
        }
    }

    onFormSubmit = () => {
        console.log('Form Submitted');
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onMessageChange = (event) => {
        this.setState({message: event.target.value});
    }

    // Note on class(className) vs. id - class can be applied to multiple elements
    // whereas id should be a unique identifier for only one element.
    // This is primarily for styling purposes (in a css file)
    render() {
        return (
            <div>
            <div class="container">
              <img src={background} width="100%"/>
                <div class="centered">
                  <h1>Contact Us</h1>
                </div>
            </div>
            <div class="smallcontainer">
                <h2 class="a">Apply to join Bins</h2>
                <p class="a">We are offering storage companies the opportunity to partner with us and join the platform. Gain more customers through a new channels and fill unwanted vacancies.</p>
                <a href="https://forms.gle/88mtu637wESKE5dJ9" class="button">Join Us</a>
            </div>

                <div class="buttoncontainer">
                  <h5>Coming Soon</h5>
                  <a /*href="https://www.apple.com/app-store/"*/ class='appbutton'><img src={appStoreButton} width="300px"/></a>
                  <a /*href="https://play.google.com/store?hl=en_US.com/"*/ class='appbutton'><img src={googleStoreButton} width="300px"/></a>
                </div>
                <div class="bottom">
                  <p class="c">© 2020 Bins Storage, Inc.</p>
                </div>
            </div>
        );
    }
}

/* This is a contact us form
<div class="formcontainer">
    <form id='contact-form' onSubmit={this.onFormSubmit} method='POST'>
        <div className='contact-form-inputs'>
            <label htmlFor="inputName">Name</label>
            <input id='inputName' type="text" value={this.state.name} onChange={this.onNameChange}/>
        </div>
        <div className='contact-form-inputs'>
            <label htmlFor='inputEmail'>Email</label>
            <input id='inputEmail' type='email' value={this.state.email} onChange={this.onEmailChange}/>
        </div>
        <div className='contact-form-inputs'>
            <label htmlFor='messageContent'>Message</label>
            <textarea id='messageContent' rows='5' value={this.state.message} onChange={this.onMessageChange} />
        </div>
        <button type='submit'>Submit</button>
    </form>
</div>
*/
