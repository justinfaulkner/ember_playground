Owners.Router.map(function() {
    this.route("about", {path: "/about" });
    this.route("favorites", {path: "/favs"});
    this.route('contributors');
    this.route("contributor", {path: '/contributors/:contributor_id'});
    this.resource('tables');
    this.resource('rests');
});

Owners.Router.reopen({
    location: 'history'
});