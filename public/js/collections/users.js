app.Users = Backbone.Collection.extend({
    model: app.User,
    url: '/users'
});