import ExchangeAdapter from './exchange';
import coinbase from 'npm:coinbase';

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
  }
});
