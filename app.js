const express = require('express');
const app = express();
const bodyParser =  require('body-parser');
const expressLayouts = require("express-ejs-layouts");



app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get('/', function(req, res){
	res.render('index');
});




// connect port

let port = process.env.PORT;
if(port == null || port == " "){
    port = 3000;
}

app.listen(port, function(){
   console.log("Your Suci Server Has Started!");
});