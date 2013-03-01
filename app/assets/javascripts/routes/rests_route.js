Owners.RestsRoute = Ember.Route.extend({
    model: function() {
        return Owners.Rest.find();
    }
});