App.TableRoute = Ember.Route.extend({
    model: function(params) {
        return App.Table.find(params.table_id);
    }
});