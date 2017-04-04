import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['query', 'page'],
  page: 1,

  actions: {
    updateQuery() {
      this.set('page', 1);
      this.send('refreshModel');
    },
    nextPage() {
      if (this.get('page') >= this.get('model.meta').pages) return;
      this.incrementProperty('page');
    },
    prevPage() {
      if (this.get('page') <= 1) return;
      this.decrementProperty('page');
    }
  }
});
