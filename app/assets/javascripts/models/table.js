App.Table = DS.Model.extend({
  name: DS.attr('string'),
  tab: DS.belongsTo('App.Tab')
});





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