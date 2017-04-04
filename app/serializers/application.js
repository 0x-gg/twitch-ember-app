import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload) {
    let total;
    let pages;
    payload.streams.forEach((x) => {
      total = payload._total;
      pages = Math.ceil(total/10);
      x.id = x._id;
      x.image = x.preview.medium;
      x.title = x.channel.status;
      x.url = x.channel.url;
      delete x._id;
    });

  delete payload._total;

  payload.meta = {'total': total,
                  'pages': pages};

    return this._super(...arguments);
  }
});
