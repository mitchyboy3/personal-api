const express = require('express');
const bodyParser = require('body-parser');
const middleware = require('./controllers/middleware.js')
const mainCtrl = require('./controllers/mainCtrl.js')
const port = 3000;

const app = express();
app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/user', mainCtrl.getUser);
app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOcupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesType);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyGender);
app.get('/restaurants/', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurantsName);

app.put('/name', mainCtrl.changeName);
app.put('/location', mainCtrl.changeLocation);

app.post('/occupations', mainCtrl.addOccupation);
app.post('/restaurants/', mainCtrl.addRestaurant);
app.post('/family', mainCtrl.addFamily);
app.post('/hobbies', mainCtrl.addHobby);


app.listen(port, ()=>{console.log(`Jarvis here; Listening on port ${port}.`)})