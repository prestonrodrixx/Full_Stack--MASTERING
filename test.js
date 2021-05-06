const express = require("express");
const app = express();
const bodyParser = require("body-parser");


//app.get('/favicon.ico', (req,res) => res.status(204));

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/add-product', (req,res,next) => {
    //console.log("In the add-product middleware");
    res.send('<form action ="/product" method ="POST"> <input type="text" name="message"></input><button type="submit">Add Product</button> </form> ');
 });

 app.use('/product', (req,res,next) => {
    console.log(req.body.message);
    res.redirect('/add-product');
 });


app.use('/', (req,res,next) => {
   //console.log("In the slash  middleware");
   res.send('<h1> Hello </h1>');
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});