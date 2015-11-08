import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizePayload(modelClass) {
    var payLoad = {};
    var i = 0;
    for (var key in modelClass) {
      if (modelClass.hasOwnProperty(key)) {
        if(key !== "timestamp") {
          payLoad[i++] = modelClass[key];
        }
      }
    }
    console.log(payLoad);
    return this._super(payLoad);
  },
  modelNameFromPayloadKey() {
    return this._super("exchange");
  }
});
