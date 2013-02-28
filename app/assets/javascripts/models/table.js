App.Table = DS.Model.extend({
    tab: DS.belongsTo('App.Tab')
});

App.Tab = DS.Model.extend({
    tabItems: DS.hasMany('App.TabItem'),
    cents: function() {
        return this.get('tabItems').getEach('cents').reduce(function(accum, item) {
            return accum +item;
        }, 0);
    }.property('tabItems.@each.cents')

});

App.TabItem = DS.Model.extend({
    cents: DS.attr('number'),
    food: DS.belongsTo('App.Food')
});

App.Food = DS.Model.extend({
    name: DS.attr('string'),
    imageUrl: DS.attr('string'),
    cents: DS.attr('number'),
    fixedImageUrl: function() {
        return 'assets/' + this.get('imageUrl');
    }.property('imageUrl')
});

App.Table.FIXTURES = [{
    id: 1,
    tab: 1
}, {
    id: 2,
    tab: 2
}, {
    id: 3,
    tab: 3
}, {
    id: 4,
    tab: 4
}, {
    id: 5,
    tab: 5
}, {
    id: 6,
    tab: 6
}];

App.Tab.FIXTURES = [{
    id: 1,
    tabItems: []
}, {
    id: 2,
    tabItems: []
}, {
    id: 3,
    tabItems: []
}, {
    id: 4,
    tabItems: [400, 401, 402, 403, 404]
}, {
    id: 5,
    tabItems: []
}, {
    id: 6,
    tabItems: []
}];

App.TabItem.FIXTURES = [{
    id: 400,
    cents: 1500,
    food: 1
}, {
    id: 401,
    cents: 300,
    food: 2
}, {
    id: 402,
    cents: 700,
    food: 3
}, {
    id: 403,
    cents: 950,
    food: 4
}, {
    id: 404,
    cents: 2000,
    food: 5
}];

App.Food.FIXTURES = [{
    id: 1,
    name: 'Pizza',
    imageUrl: 'pizza.png',
    cents: 1500
}, {
    id: 2,
    name: 'Pancakes',
    imageUrl: 'pancakes.png',
    cents: 300
}, {
    id: 3,
    name: 'Fries',
    imageUrl: 'fries.png',
    cents: 700
}, {
    id: 4,
    name: 'Hot Dog',
    imageUrl: 'hotdog.png',
    cents: 950
}, {
    id: 5,
    name: 'Birthday Cake',
    imageUrl: 'birthdaycake.png',
    cents: 2000
}];

App.Restaurant = DS.Model.extend({
    name: DS.attr('string'),
    address: DS.attr('string'),
});

App.Restaurant.FIXTURES = [{
    id: 1,
   name: "rest 1",
    address: "asdf address"
},
    {
        id: 2,
        name: "rest 3",
        address: "asdf asdfasdaddress"
    },
    {
        id: 3,
        name: "rest 100",
        address: "asdf address 9872834l"
    }];