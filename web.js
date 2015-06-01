var express = require("express"),
    bodyParser = require("body-parser"),  //add this line
    https = require("https"),
    app = express();
 
app.use(bodyParser.urlencoded()); 
app.use(express.static(__dirname + "/client"));
 
// Create our Express-powered HTTP server
http.createServer(app).listen(3000);
 
// set up our routes
app.get("/hello", function (req, res) {
    res.send("<h2>Hello World!</h2>");
});
 
app.get("/goodbye", function (req, res) {
    res.send("<h2>Goodbye World!</h2>");
});
 
// set up the root route
app.get("/", function (req, res) {
    res.send("<h2>This is the root route!</h2>");
});
 
var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});