Owners.Contributor = Ember.Object.extend();
Owners.Contributor.reopenClass({
    allContributors: [],
    all: function() {
        this.allContributors = [];
        $.ajax({
            url: 'https://api.github.com/repos/emberjs/ember.js/contributors',
            dataType: 'jsonp',
            context: this,
            success: function(response) {
                response.data.forEach(function(contributor) {
                    this.allContributors.addObject(Owners.Contributor.create(contributor))
                }, this)
            }
        });
        return this.allContributors;
    }
});