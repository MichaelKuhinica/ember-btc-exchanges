import BitexAdapter from './bitex';

export default BitexAdapter.extend({
  createRecord: function(store, type, snapshot) {
    var data = this.createData(snapshot);
    return this.performRequest('POST', 'private/asks', data);
  }
});
