App.ContributorsRoute = Ember.Route.extend({
   model: function() {
       return App.Contributor.all();
   }
});