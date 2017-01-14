var app = app || {};

app.FlowersCollection = Backbone.Collection.extend({
    model: app.singleFlower,
    initialize: function () {
        this.on('change', function() {
            console.log('The collection model has been changed.');
        });
    }
});