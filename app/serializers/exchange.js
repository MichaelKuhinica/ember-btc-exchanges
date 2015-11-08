import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONAPISerializer.extend({
  keyForAttribute: function(attr, method) {
    if(method === 'deserialize') {
      switch (attr) {
        case "displayURL":
            return "display_URL";
        default:
            return Ember.String.decamelize(attr);
      }
    } else {
      return Ember.String.camelize(attr);
    }
  },
  normalizeResponse (store, primaryModelClass, payload, id, requestType)  {
    var data = [];
    var transformedPayload = {};
    for (var key in payload) {
      if (payload.hasOwnProperty(key)) {
        let obj = payload[key];
        Ember.merge(obj, obj.rates);
        delete obj.rates;
        if(key !== "timestamp") {
          data.push({
            id: key,
            attributes: obj,
          });
        } else {
          transformedPayload['meta'] = {timestamp: obj};
        }
      }
    }
    transformedPayload['data'] = data;
    return this._super(store, primaryModelClass, transformedPayload, id, requestType);
  },
  modelNameFromPayloadKey() {
    return this._super("exchange");
  }
});
