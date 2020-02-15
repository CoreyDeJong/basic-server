'use strict'
//require brings in the express library, will still need to install in the terminal
const express = require('express');
const app = express();

require('dotenv').config();

//use to be PORT = 3000, but creating a .env hidden file will change the name to reference that hidden file. If port 3000 doesnt work, then || will go to port 3001
const PORT = process.env.PORT || 3001;

//localhost:3000 typed in an web browser will show Hello World on the page
// app.get('/', function (request, response) {
//   response.send('Hello World')
// })

//localhost:3000/bananas will show I love bananas in a web browser
// app.get('/bananas', (request, response) => {
//     response.send('I love bananas');
// })

//tells express to serve files from the public folder
app.use(express.static('./public'));

app.listen(PORT, () => console.log(`listening on ${PORT}`));