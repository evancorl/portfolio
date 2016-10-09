import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Email } from 'meteor/email';

const { ADMIN_EMAIL } = Meteor.settings;

Meteor.methods({
  'contactForm.submit'(form) {
    const { name, email, message } = form;

    check(name, String);
    check(email, String);
    check(message, String);

    Email.send({
      to: ADMIN_EMAIL,
      from: email,
      subject: 'Contact form message from ' + name,
      text: message,
      replyTo: email,
    });
  },
});
