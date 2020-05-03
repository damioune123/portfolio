//vendor
const express = require('express');
const cors = require('cors');
const path = require('path');

// Create a new instance of Express and socket io
const app = express();
const http = require('http').createServer(app);

//middlewares
app.use(cors());

// Serve static html, js, css, and image files from the built frontend 'build'
app.use(express.static(path.normalize(path.join(__dirname,'../../frontend/build'))));

module.exports = app;

const port = 80;
// Create a Node.js based http server on port 80
http.listen(port,()=>{
    console.log('listening on *:'+port);
});

