import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('rates', { path: '/' }, function() {
    this.route('buy', { path: "/:exchange" });
    this.route('sell', { path: "/:exchange" });
  });
});

export default Router;
