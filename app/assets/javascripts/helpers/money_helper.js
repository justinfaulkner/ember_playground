Ember.Handlebars.registerBoundHelper('money', function(value) {
    var remainder = value % 100;
    if(remainder == 0) {
        remainder = '00';
    }
    return parseInt(value / 100, 10) + '.' + remainder;
});