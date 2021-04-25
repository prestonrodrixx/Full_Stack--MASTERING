const express = require('express');
const app = express();

app.get('title');
// => undefined

app.set('title', 'My Site');
app.get('title');
// => "My Site"

console.log(app.get('title'));
