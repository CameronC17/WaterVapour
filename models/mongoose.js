var mongoose = require('mongoose');

var UsersSchema = mongoose.Schema({
  name: {type:String , required : true},
  ownedGames: Array,
  image: {type:String , required : true}
}, {
  timestamps: true
});
var GamesSchema = mongoose.Schema({
  title: {type:String , required : true},
  tags: {type:Array , required : true},
  body: {type:String , required : true},
  image: {type:String , required : true},
  comments: Array
});

module.exports =
{
    Users : mongoose.model('Users' , UsersSchema),
    Games : mongoose.model('Games' , GamesSchema)
}
