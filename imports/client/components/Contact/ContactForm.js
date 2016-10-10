import { Meteor } from 'meteor/meteor';
import React from 'react';
import Scroll from 'react-scroll';

import { EzForm } from '../../../modules/ezform';
import contactFormSchema from '../../../modules/schemas/contact-form';

const ScrollElement = Scroll.Element;

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);

    this.state = {
      isSubmitting: false,
      serverErrorMessage: null,
      submittedSuccessfully: false,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.isSubmitting !== nextState.isSubmitting ||
      this.state.serverErrorMessage !== nextState.serverErrorMessage ||
      this.state.submittedSuccessfully !== nextState.submittedSuccessfully;
  }

  submitForm(form) {
    this.setState({
      isSubmitting: true,
    });

    Meteor.call('contactForm.submit', form, error => {
      const newState = {
        isSubmitting: false,
      };

      if (error) {
        const serverErrorMessage = error.error === 'invalidForm'
          ? error.reason
          : 'Uh oh, some boring server stuff malfunctioned. Would you mind trying again?';

        newState.serverErrorMessage = serverErrorMessage;
      } else {
        newState.submittedSuccessfully = true;
      }

      this.setState(newState);
    });
  }

  render() {
    const { serverErrorMessage } = this.state;

    return (
      <ScrollElement name="contact" id="contact" className="inner-ver inner-hor">
        <div className="col-center-md">
          <h1 className="contact-title">Contact</h1>
          <EzForm
            schema={contactFormSchema}
            onSuccess={this.submitForm}
            asyncErrorMessage={serverErrorMessage}
            className="contact-form">
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="text-box text-box-spacing text-box-no-border"
            />
            <input
              name="emailAddress"
              type="text"
              placeholder="Email address"
              className="text-box text-box-spacing text-box-no-border"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="text-box text-box-spacing text-box-no-border"
              rows="6"
            ></textarea>
            {serverErrorMessage}
            <button type="submit" className="button red contact-btn">Send</button>
          </EzForm>
        </div>
      </ScrollElement>
    );
  }
}

export default ContactForm;
