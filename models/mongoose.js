var mongoose = require('mongoose');

var UsersSchema = mongoose.Schema({
  name: String,
  creationDate: new Date(),
  ownedGames: [],
  image: String
});
var GamesSchema = mongoose.Schema({
  title: String,
  tags: [String],
  body: String,
  image: String,
  comments: []
});

var TestData = function(){
    console.log("Test Data add begin");
    mongoose.model('Users' , UsersSchema).create({
        name: "CaptainCam",
        creationDate: new Date(),
        ownedGames: [1],
        image: "http://weknowyourdreams.com/image.php?pic=/images/cowboy/cowboy-04.jpg"
    });
    mongoose.model('Users' , UsersSchema).create({
        name: "Nathn123",
        creationDate: new Date(),
        ownedGames: [2,3],
        image: "http://weknowyourdreams.com/image.php?pic=/images/car/car-04.png"
    });
    mongoose.model('Users' , UsersSchema).create({
        name: "o_r_l_y",
        creationDate: new Date(),
        ownedGames: [3],
        image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Rodney_boat.jpg"
    });
    mongoose.model('Games', UsersSchema).create({
        title: "Spooky Skeltal game",
        tags: ["Scary", "Fun"],
        body: "This game will spooky the hell out of you",
        image: "https://i.ytimg.com/vi/eVrYbKBrI7o/maxresdefault.jpg",
        comments: []
    });
    mongoose.model('Games', UsersSchema).create({
        title: "Call of Doody 23",
        tags: ["Action", "Explosions"],
        body: "Shoot people and do not feel guilty whatsoever",
        image: "http://mod.gov.rw/fileadmin/user_upload/Images_for_News/Zigama_Css_G_Assemb2.jpg",
        comments: []
    });
    mongoose.model('Games', UsersSchema).create({
        title: "Pineshaft",
        tags: ["Explore", "Dig"],
        body: "You have never wanted to dig dirt for hours until now",
        image: "http://i.imgur.com/8XSrp6G.jpg",
        comments: []
    });
    console.log("Test Data added");
};

module.exports = 
{
    Users : mongoose.model('Users' , UsersSchema),
    Games : mongoose.model('Games' , GamesSchema),
    TestData : TestData() 
}