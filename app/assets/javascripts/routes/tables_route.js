Owners.TablesRoute = Ember.Route.extend({
    model: function() {
        return Owners.Table.find();
    }
});