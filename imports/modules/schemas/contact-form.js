const contactFormSchema = {
  name: {
    messages: {
      required: 'Please enter your name',
    },
  },
  emailAddress: {
    messages: {
      required: 'Please enter your email address',
    },
  },
  message: {
    messages: {
      required: 'Please don\'t give me the silent treatment :(',
    },
  }
};

export default contactFormSchema;
