const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.static('server/public'));

app.listen(5000, function() {
    console.log('Hey server is up and running!');
});

app.get('/',function(request, response) {
    response.send('Hello!!!!');
});