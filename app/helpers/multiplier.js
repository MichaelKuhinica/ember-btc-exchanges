import Ember from 'ember';

export function multiplier(params) {
  var total = params[0];
  for (var i = 1; i < params.length; i++) {
    total *= params[i];
  }
  return total || 0;
}

export default Ember.Helper.helper(multiplier);
