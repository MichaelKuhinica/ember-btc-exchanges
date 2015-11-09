import Ember from 'ember';

export function capitalize(params/*, hash*/) {
  if(params.length > 0) {
    return Ember.String.capitalize(params[0]);
  }
  return params;
}

export default Ember.Helper.helper(capitalize);
