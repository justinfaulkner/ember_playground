App.Food = DS.Model.extend({
  name: DS.attr('string'),
  imageUrl: DS.attr('string'),
  cents: DS.attr('number'),

  fixedImageUrl: function() {
    return 'assets/' + this.get('imageUrl');
  }.property('imageUrl')
});