var express = require('express');
var app = express();
var PORT = 3000;

var app = express();
var blog = express();
var blogAdmin = express();
var blogAdmin1 = express();

app.use('/user', blog);
blog.use('/admin', blogAdmin);
blogAdmin.use('/user', blogAdmin1);

console.dir(app.path()); // ''
console.dir(blog.path()); // '/blog'
console.dir(blogAdmin.path()); // '/blog/admin'
console.dir(blogAdmin1.path()); // '/blog/admin/user'
