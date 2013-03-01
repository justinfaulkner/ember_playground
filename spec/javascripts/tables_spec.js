//= require application

Ember.testing = true
Konacha.reset = function() { }
jQuery.fx.off = true

App.initialize();
App.Router.reopen({
    location: 'none'
});


describe('ember app', function() {

    beforeEach(function() {
        Ember.run(function (){
            App.reset();
        });
        if(App.store) {
            App.store.destroy()
        }
        App.store = DS.Store.create({revision: 11})
    })

    it("should load", function() {
        

    });

});