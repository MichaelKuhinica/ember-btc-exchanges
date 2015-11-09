import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    if(this.store.hasRecordForId('exchange', params.exchange)) {
      return this.store.find('exchange', params.exchange);
    }
    this.transitionTo('rates.index');
  }
});
