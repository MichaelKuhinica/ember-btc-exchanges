import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    orderBtc: function(amount, m, direction) {
      this.sendAction('action', amount, m, direction);
    }
  }
});
