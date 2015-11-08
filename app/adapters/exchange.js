import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  host: 'https://api.bitcoinaverage.com/exchanges/USD',
  pathForType: function(type) {
    switch (type) {
      case 'exchange':
        return '';
      default:
        return type;
    }
  }
});
