module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'amazon-ses',
      providerOptions: {
        key: env('AWS_SES_KEY'),
        secret: env('AWS_SES_SECRET'),
        amazon: 'https://email.eu-west-1.amazonaws.com',
      },
      settings: {
        defaultFrom: 'employee@coloredcow.com',
        defaultReplyTo: 'no-reply@coloredcow.in',
      },
    },
  },
});
