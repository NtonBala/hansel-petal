var redRoses = new app.singleFlower({
    name: 'Red Roses',
    price: 0,
    color: 'red',
    img: 'images/redRoses.jpg'
});
redRoses.set('link', 'redRose');
redRoses.set('price', 39.95);
console.log(redRoses.toJSON());

var rainbowRoses = new app.singleFlower({
    name: 'Rainbow Roses',
    price: 29.95,
    color: 'orange',
    link: 'rainbowRose'
});

var heirloomRoses = new app.singleFlower({
    name: 'Heirloom Roses',
    price: 19.95,
    img: 'images/heirloomPinkRoses.jpg',
    link: 'heirloomRose'
});

var flowerToRemove = new app.singleFlower();

var flowerGroup = new app.FlowersCollection([
    redRoses, rainbowRoses, flowerToRemove
]);
flowerGroup.add(heirloomRoses);
flowerGroup.remove(flowerToRemove);

var flowerGroupView = new app.allFlowersView({collection: flowerGroup});
$('#allFlowers').html(flowerGroupView.render().el);
