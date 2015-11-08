import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.getJSON('https://api.bitcoinaverage.com/exchanges/USD').then(function(response) {
      var payload = [];
      for (var key in response) {
        if (response.hasOwnProperty(key)) {
          if(key !== "timestamp") {
            payload.push(response[key]);
          }
        }
      }
      return payload;
    });
  }
});
