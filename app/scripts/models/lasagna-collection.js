var Backbone = require("backbone");

var Lasagna = Backbone.Model.extend({

})

var LasagnaCollection= Backbone.Collection.extend({
  model:Lasagna,
  url:"http://tiny-lasagna-server.herokuapp.com/collections/Cartoons",
});


var Character = Backbone.Model.extend({
urlRoot: "http://tiny-lasagna-server.herokuapp.com/collections/Cartoons/",
})

// var CharacterCollection= Backbone.Collection.extend({
//   model:Character,
//   url:"http://tiny-lasagna-server.herokuapp.com/collections/Cartoons",
// });



// var cartoonList = new Character({name:"Finn the Human", Age: "16", Job:"Adventurer"})
// cartoonList.save();

// var Pizza = Backbone.Model.extend({
// urlRoot: "http://tiny-lasagna-server.herokuapp.com/collections/Pizza/",
// })
// var myPizza = new Pizza({name:'thisotherone'});
// myPizza.save();



module.exports={LasagnaCollection:LasagnaCollection,
Lasagna:Lasagna};
