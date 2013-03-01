App.TabItem = DS.Model.extend({
  name: DS.attr('string'),
  cents: DS.attr('number'),
   food: DS.belongsTo('App.Food')
});