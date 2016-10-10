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
      formSent: false,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.isSubmitting !== nextState.isSubmitting ||
      this.state.serverErrorMessage !== nextState.serverErrorMessage ||
      this.state.formSent !== nextState.formSent;
  }

  renderForm() {
    const { isSubmitting, serverErrorMessage } = this.state;

    return(
      <EzForm
        schema={contactFormSchema}
        onSuccess={this.submitForm}
        isSubmitting={isSubmitting}
        asyncErrorMessage={serverErrorMessage}
        className="contact-form">
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="text-box text-box-spacing"
        />
        <input
          name="emailAddress"
          type="text"
          placeholder="Email address"
          className="text-box text-box-spacing"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="text-box text-box-spacing"
          rows="6"
        ></textarea>
        {serverErrorMessage}
        <button type="submit" className="button red contact-btn" disabled={isSubmitting}>
          {isSubmitting ? <img src="/images/loading-white.svg" /> : 'Send'}
        </button>
      </EzForm>
    );
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
        newState.formSent = true;
      }

      Meteor.setTimeout(() => this.setState(newState), 1000);
    });
  }

  render() {
    const { formSent } = this.state;

    return (
      <ScrollElement name="contact" id="contact" className="inner-ver inner-hor">
        <div className="col-center-md">
          <h1 className="contact-title">Contact</h1>
          {
            formSent
            ? null
            : this.renderForm()
          }
          <div className={formSent ? 'contact-form-sent' : 'hide'}>
            <img src="/images/success.gif" />
            <p>Message sent! I'm excited to get back to you.</p>
          </div>          
        </div>
      </ScrollElement>
    );
  }
}

export default ContactForm;
