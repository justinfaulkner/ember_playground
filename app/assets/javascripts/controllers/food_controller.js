App.FoodController = Ember.ArrayController.extend({
    addFood: function(food) {
        var table = this.controllerFor('table').get('model'),
            tabItems = table.get('tab.tabItems');
        console.log(food.get("cents"));
        console.log(food.get("name"));
        tabItems.createRecord({
            food: food,
            cents: food.get('cents')
        });
    }
});