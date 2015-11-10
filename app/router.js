import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('rates', { path: '/' }, function() {
    this.route('buy', { path: "/buy/:exchange" });
    this.route('sell', { path: "/sell/:exchange" });
  });
});

export default Router;
