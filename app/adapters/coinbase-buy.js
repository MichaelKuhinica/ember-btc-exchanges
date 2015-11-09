import CoinbaseAdapter from './coinbase';
import Ember from 'ember';

export default CoinbaseAdapter.extend({
  createRecord: function(store, type, snapshot) {
    var client = this.client(snapshot);
    var args = {
      "amount": snapshot.get("amount"),
      "currency": "BTC"
    };
    return new Ember.RSVP.Promise(function(resolve, reject) {
      client.getAccounts({}, function(err, accounts) {
        if(err) {
          Ember.run(null, reject, err);
        } else if(accounts.length > 0) {
          accounts[0].buy(args, function(err, xfer) {
            if(err) {
              Ember.run(null, reject, err);
            } else {
              Ember.run(null, resolve, xfer);
            }
          });
        }
      });
    });
  }
});
