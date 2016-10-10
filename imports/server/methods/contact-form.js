import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';

import { EzValidator } from '../../modules/ezform';
import contactFormSchema from '../../modules/schemas/contact-form';

const { CONTACT_EMAIL } = Meteor.settings;

Meteor.methods({
  'contactForm.submit'(form) {
    const { name, emailAddress, message } = form;
    const validator = new EzValidator(contactFormSchema);

    validator.validateSchema(form, true);

    Email.send({
      to: CONTACT_EMAIL,
      from: `evancorl.com <admin@evancorl.com>`,
      subject: `Contact form message from ${name}`,
      text: message,
      replyTo: `${emailAddress} <${emailAddress}>`,
    });
  },
});
