import { validateEmail } from '../../utils/helpers';
import React, { useState } from "react";

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (!errorMessage) {
        setFormState({ [event.target.name]: event.target.value });
        console.log('Form', formState);
      }
    };
  
    const handleChange = (event) => {
      if (event.target.name === 'email') {
        const isValid = validateEmail(event.target.value);
        if (!isValid) {
          setErrorMessage('Not a valid email.');
        } else {
          setErrorMessage('');
        }
      } else {
        if (!event.target.value.length) {
          setErrorMessage(`${event.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
    };
  
    return (
      <section>

        <h2 className="text-dark bg-primary p-2 display-inline-block">About Me</h2>
          <div className="col-12 mb-2 bg-dark text-light p-3">
           
                <div className="col-9 about">
                    <ul>
                        <li>hikegami.6@gmail.com</li>
                        <li>(801) 598-6965</li>
                        <li>The styling of the form functionality was not implemented because I do not intend to keep the contact form in the finished product. This small contact section will be incorporated into the about after project grading.</li>
                    </ul>
                </div>
            </div>

        <h1 data-testid="h1tag">Contact me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <br/>
            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          </div>
          <button data-testid="button" type="submit">Submit</button>
        </form>
      </section>
    );
  }

export default Contact;