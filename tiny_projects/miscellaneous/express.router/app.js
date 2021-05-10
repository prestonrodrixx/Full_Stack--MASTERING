var express = require('express');
var app = express();
var PORT = 3000;

app.use(require('./routes'));

app.get('/', (req, res) => {
	res.send('Home Route');
  });
 
app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
