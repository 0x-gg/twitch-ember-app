import DS from 'ember-data';

export default DS.Model.extend({
  game: DS.attr(),
  viewers: DS.attr(),
  image: DS.attr(),
  title: DS.attr(),
  url: DS.attr()
});
