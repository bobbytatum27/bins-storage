import React from 'react';
import background from '../assets/images/trees.png'

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
                <h1>Contact Us!</h1>
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
        );
    }
}
