import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    if(this.store.hasRecordForId('rate', params.exchange)) {
      return this.store.find('rate', params.exchange);
    }
    this.transitionTo('rates.index');
  },
  amount: 0

});
