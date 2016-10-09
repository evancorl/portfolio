import React from 'react';
import Scroll from 'react-scroll';

import TextBox from '../Utility/TextBox';

const ScrollElement = Scroll.Element;

class ContactForm extends React.Component {
  submitForm(event) {
    event.preventDefault();
  }

  render() {
    return (
      <ScrollElement name="contact" id="contact" className="inner-ver inner-hor">
        <div className="col-center-md">
          <h1 className="contact-title">Contact</h1>
          <form action="/login" method="post" className="contact-form" onSubmit={this.submitForm}>
            <TextBox
              type="text"
              name="name"
              placeholder="Name"
              className="text-box-spacing text-box-no-border"
              required
            />
            <TextBox
              type="text"
              name="emailAddress"
              placeholder="Email address"
              className="text-box-spacing text-box-no-border"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="text-box text-box-spacing text-box-no-border"
              rows="6"
              required
            >
            </textarea>
            <button type="submit" className="button red contact-btn">Send</button>
          </form>
        </div>
      </ScrollElement>
    );
  }
}

export default ContactForm;
