import Ember from 'ember';

export function directionalPrice(params) {
  if(params.length > 1) {
    var model = params[0];
    var direction = params[1];

    switch (direction) {
      case 'buy':
        return model.get('ask');
      case 'sell':
        return model.get('bid');
      default:
        return model.get('ask');
    }
  }
}

export default Ember.Helper.helper(directionalPrice);
