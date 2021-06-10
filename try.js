const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  let fruits = [
    { name: 'John', Id: 3890, role: 'Developer' },
    { name: 'Alex', Id: 2132, role: 'Manager' },
    { name: 'Ana', Id: 8976, role: 'Developer' },
    { name: 'Sara', Id: 6541, role: 'Analyst' },
    { name: 'David', Id: 1122, role: 'Tester' },
  ];
  console.log(fruits.Id);
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log('Server listening on PORT', PORT);
});
