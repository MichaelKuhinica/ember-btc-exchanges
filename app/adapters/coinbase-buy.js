import CoinbaseAdapter from './coinbase';

export default CoinbaseAdapter.extend({
  createRecord: function(store, type, snapshot) {
    var client = this.client(snapshot);
    var args = this.orderRequestArgs(snapshot);
    return this.performOrder(client, 'buy', args);
  }
});
