Owners.ContributorsRoute = Ember.Route.extend({
   model: function() {
       return Owners.Contributor.all();
   }
});