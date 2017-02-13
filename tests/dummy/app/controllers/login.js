import Ember from 'ember';

const {
  Controller,
  inject,
  get,
} = Ember;

export default Controller.extend({
  session: inject.service(),
  actions: {
    login() {
      get(this, 'session').authenticate('authenticator:auth0-lock');
    },
    loginPasswordless(type) {
      const lockOptions = {
        autoclose: true,
      };

      get(this, 'session').authenticate('authenticator:auth0-passwordless', type, lockOptions, () => {
        console.log('Passwordless thing sent');
      });
    }
  }
});
