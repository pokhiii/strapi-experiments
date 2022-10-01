module.exports = {
  beforeCreate(event) {
    const { data, where, select, populate } = event.params;

    // let's do a 20% discount everytime
    event.params.data.price = event.params.data.price * 0.8;
  },

  async afterCreate(event) {
    const { result, params } = event;

    console.log(strapi.plugins['email'].services.email.getProviderSettings())

    await strapi.plugins['email'].services.email.send({
      to: 'pokhi@coloredcow.com',
      subject: 'Lakshay testing for PAAR',
      html: 'Please forward this email to varshney.lakshya05@gmail.com<br><br>Thanks',
    })

  },
};
