App.Router.map(function() {
    this.route("about", {path: "/about" });
    this.route("favorites", {path: "/favs"});
    this.route('contributors');
    this.route("contributor", {path: '/contributors/:contributor_id'});
    this.resource('tables', function() {
        this.resource('table', {path:':table_id'});
    });
    this.resource("restaurants", function() {
    });
});

App.Router.reopen({
    location: 'history'
});