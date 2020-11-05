const http = require('http');
const express = require('express');
const path = require('path');
const port = 8080;
const app = express()



// Inside your server file, you can simply point express to your client folder
app.use(express.static(__dirname + '/public'));


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
