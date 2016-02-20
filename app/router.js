import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('ideas', { path: '/' }, function() {
    this.route('idea', { path: ':idea_id' });
  });
});

export default Router;
