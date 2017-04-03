import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'article',
  classNames: ['search-streams'],

  //attrs: start
  streams: []
  //attrs: end
});
