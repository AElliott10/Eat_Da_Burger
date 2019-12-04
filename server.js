//Section I - set up all the required dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride =require("method-override");
var exphbs = require("express-handlebars");

// Section II: Serve static content for the app from the "public" directory in the application directory.

var app = express();
app.use(express.static(__dirname + "/public"));//double underscore for __dirname not a single one _dirname

// Parse application body
app.use(bodyParser.urlencoded({
  extended:false
}))

app.use(methodOverride('_method'));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Section III: Need the server to reference the controller route file; This connect (imports) the server with the controller route - add to burgers_controller module.exports=burgers_controller; to complete connection
var burgers_controller = require('./controllers/burgers_controller.js');
app.use('/',burgers_controller);

// Section IV: Start our server so that it can begin listening to client requests.
var PORT = 8080;
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
