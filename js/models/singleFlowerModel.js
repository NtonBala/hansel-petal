var app = app || {};

app.singleFlower = Backbone.Model.extend({
    defaults: {
        color: 'pink',
        img: 'images/placeholder.jpg'
    },
    initialize: function() {
        console.log('A model instance named ' + this.get('name') + ' has been created. It costs $' + this.get('price'));
        this.on('change', function() {
            console.log('The model instance ' + this.get('name') + ' has been changed.');
        });
        this.on('change:price', function () {
            console.log('The price for ' + this.get('name') + ' has just been changed to $' + this.get('price'));
        });
    }
});
