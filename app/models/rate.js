import DS from 'ember-data';

export default DS.Model.extend({
  ask: DS.attr('number'),
  bid: DS.attr('number'),
  last: DS.attr('number'),
  exchange: DS.belongsTo('exchange')
});
