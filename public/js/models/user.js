app.User = Backbone.Model.extend({
    defaults: {
        firstName: 'Just',
        middleInitial: '',
        lastName: 'User',
        assets: []
    }
});