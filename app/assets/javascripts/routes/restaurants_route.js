App.RestaurantsRoute = Ember.Route.extend({
    model: function() {
        return App.Restaurant.find();
    }
});