import ExchangeAdapter from './exchange';
import coinbase from 'npm:coinbase';
import Ember from 'ember';

export default ExchangeAdapter.extend({
  client: function(snapshot) {
    var Client = coinbase.Client;
    var rate = snapshot.get('rate');
    var clientArgs = {
      'apiKey': rate.get('token'),
      'apiSecret': rate.get('secret'),
      'baseApiUri': 'https://api.sandbox.coinbase.com/v2/',
      'tokenUri': 'https://api.sandbox.coinbase.com/oauth/token'
    };
    var client = new Client(clientArgs);
    return client;
  },
  orderRequestArgs: function(snapshot) {
    return {
      "amount": snapshot.get("amount"),
      "currency": "BTC"
    };
  },
  performOrder: function(client, direction, args) {
    var that = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      that.getAccount(client).then(function(data) {
        data[direction](args, function(err, xfer) {
          if(err) {
            Ember.run(null, reject, err);
          } else {
            Ember.run(null, resolve, xfer);
          }
        });
      }, function(err) {
          Ember.run(null, reject, err);
      });
    });
  },
  getAccount: function(client) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      client.getAccounts({}, function(err, accounts) {
        if(err) {
          Ember.run(null, reject, err);
        } else if(accounts.length > 0) {
          Ember.run(null, resolve, accounts[0]);
        } else {
          Ember.run(null, reject, err);
        }
      });
    });
  }
});
