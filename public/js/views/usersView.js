app.UsersView = Backbone.View.extend({
    el: '#users',

    initialize: function() {
        this.collection = new app.Users();
        this.collection.fetch({reset: true});
        console.log(this.collection.length);
        if (this.collection.models.length < 1) {
            this.collection.add([
                { firstName: 'Thomas', middleInitial: 'A', lastName: 'Anderson', assets: [] },
                { firstName: 'Jon', middleInitial: 'B', lastName: 'Smith', assets: [] },
                { firstName: 'Jane', middleInitial: 'C', lastName: 'Doe', assets: [] },
                { firstName: 'Jack', middleInitial: 'O', lastName: 'Clubs', assets: [] },
                { firstName: 'Ace', middleInitial: 'O', lastName: 'Spades', assets: [] },
            ]);
        }
        this.render();

        this.listenTo(this.collection, 'add', this.renderUser);
        this.listenTo(this.collection, 'reset', this.render);
    },

    // Render the array of users
    render: function() {
        this.collection.each(item => this.renderUser(item));
    },

    // Render a user from the array 
    renderUser: function(item) {
        let userView = new app.UserView({ model: item });
        this.$el.append(userView.render().el);
    },

    events:{
        'click #add':'addUser'
    },  

    addUser: function(e) {
        e.preventDefault();
    
        let formData = {};
    
        $('#addUser div').children('input').each((i, el) => {
            if ($(el).val() !== '') {
                formData[el.id] = $(el).val();
            }
        });
    
        this.collection.create(formData);
    },
});