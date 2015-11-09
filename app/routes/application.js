import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    showModal: function(name, model) {
      this.render(name, {
        into: 'application',
        outlet: 'modal',
        model: model
      });
    },
    removeModal: function() {
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    },
    orderBtc: function(amount, m, direction) {
      var order = this.store.createRecord(m.id+'_'+direction, {
        amount: amount,
        rate: m
      });
      var promise = order.save();
      var that = this;
      promise.then(function(value) {
        that.send('showModal', 'modals/notice', value.id);
      }, function(error) {
        that.send('showModal', 'modals/error', error);
      });
    }
  }
});
