var express = require('express');

var app = express(); // the main app
var admin = express();

admin.get('/', function (req, res) {
  console.dir(admin.mountpath); // [ '/adm*n', '/manager' ]
  res.send('Admin Homepage');
});

var secret = express();

secret.get('/', function (req, res) {
  console.log(secret.mountpath); // /secr*t
  res.send('Admin Secret');
});

admin.use('/secr*t', secret); // load the 'secret' router on '/secr*t', on the 'admin' sub app
app.use(['/adm*n', '/manager'], admin); // load the 'admin' router on '/adm*n' and '/manager', on the parent app

admin.listen(3000, (err) => {
  if (err) console.log(err);
  console.log('Server listening on PORT', 3000);
});

secret.listen(3001, (err) => {
  if (err) console.log(err);
  console.log('Server listening on PORT', 3001);
});

app.listen(3002, (err) => {
  if (err) console.log(err);
  console.log('Server listening on PORT', 3002);
});
