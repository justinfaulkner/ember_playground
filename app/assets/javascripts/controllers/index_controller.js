App.IndexController = Ember.Controller.extend({
    firstName: 'Justin',
    lastName: 'Faulkner',
    person: {
        firstName: 'Brian',
        lastName: 'Roberts'
    },
    items: [
        {name: 'Helicopter'},
        {id: 44, name: 'Mouse'},
        {id: 324, name: 'bottle'},
        {id: 2, name: 'plane'}
    ],
    logoUrl: 'http://emberjs.com/images/ember_logo.png',
    allowedToApprove: true
});