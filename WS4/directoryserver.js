const express = require('express');
const app = express();

app.use(express.static('public/demosite/'));

app.listen(8081);
console.log('8081 is the magic port')