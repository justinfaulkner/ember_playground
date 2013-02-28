App.FoodItemController = Ember.ObjectController.extend({
    fixedImageUrl: function() {
        var model = this.get('content');
        console.log(model);
        return "assets/"+model.imageUrl;
    }.property('content.fixedImageUrl')
});