var $ = require("jquery");
var Collection = require("./models/lasagna-collection")
 var myCollection = new Collection.LasagnaCollection();
 var Backbone = require("backbone");

 var Character = Backbone.Model.extend({
 urlRoot: "http://tiny-lasagna-server.herokuapp.com/collections/Cartoons/",
 })

$("#thisbutton").click(function(){
$("#thisbutton").html("Loading...");
this.disabled = true;
myCollection.fetch().done(function(event){
  $(".container").empty();
  var count = 0;
event.forEach(function(person){
  count+=1;
  if(count<=$("#searchlimit").val()){
      $(".container").append("<p>" + person.name + "</p>")
  }
})

  $("#thisbutton").html("Submit");
  document.getElementById("thisbutton").disabled = false;
});
});

$("#addForm").submit(function(event){
  event.preventDefault();
 var adding = $("#fname").val();
 $("#fname").val="";
  var cartoonList = new Character({name:adding, Age: "??", Job:"Something"})
  cartoonList.save();
})
console.log($("#searchlimit").val())
