import DS from 'ember-data';

export default DS.Model.extend({
  displayURL: DS.attr('string'),
  displayName: DS.attr('string'),
  source: DS.attr('string'),
  volumeBtc: DS.attr('number'),
  volumePercent: DS.attr('number'),
  rate: DS.belongsTo('rate')
});
