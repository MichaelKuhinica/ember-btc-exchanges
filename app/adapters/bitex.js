import ExchangeAdapter from './exchange';
import Ember from 'ember';

export default ExchangeAdapter.extend({
  host: 'https://sandbox.bitex.la/api-v1/rest',
  fullHost: function(action) {
    action = action || '';
    return this.host+'/'+action;
  },
  performRequest: function(type, action, data) {
    var that = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        type: type,
        url: that.fullHost(action),
        dataType: 'json',
        data: data
      }).then(function(resp) {
        Ember.run(null, resolve, resp);
      }, function(jqXHR) {
        Ember.run(null, reject, jqXHR.responseText || 'Error communicating with the exchange.');
      });
    });
  },
  createData: function(snapshot) {
    var rate = snapshot.get('rate');
    return {
      api_key: rate.get('token'),
      amount: snapshot.get('amount'),
      price: snapshot.get('amount')
    };
  }
});
