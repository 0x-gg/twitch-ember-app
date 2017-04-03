import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    query: {
    },
    page: {
      refreshModel: true
    }
  },

  model(params, transition) {
    const page = transition.queryParams.page || 1;
    const query = transition.queryParams.query || 'starcraft';
    const offset = (page - 1) * 10;
    return this.get('store').query('stream', { offset: offset, query: query });
  },

  actions: {
    refreshModel() {
      this.refresh();
    }
  }
});
