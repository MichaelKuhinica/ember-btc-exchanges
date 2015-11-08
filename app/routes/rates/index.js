import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON('https://api.bitcoinaverage.com/exchanges/USD');
  }
});
