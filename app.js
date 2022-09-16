const express = require ('express');
const app = express();

// GET method route
app.get('/Express/api/v1/definition/expressjs', (req, res) => {
    res.send('Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.')
  })

app.listen(4300, function(){
    console.log('Simple App is Running');
})