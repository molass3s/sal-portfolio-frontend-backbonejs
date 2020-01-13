app.UserView = Backbone.View.extend({
    tagName: 'div',
    className: 'userContainer',
    template: _.template($( '#userTemplate' ).html()),

    render: function() {
        this.$el.html(this.template( this.model.attributes));
        return this;
    },

    events: {
        'click .delete': 'deleteUser'
    },

    deleteUser: function() {
        this.model.destroy();
        this.remove();
    },
});