const express = require('express');
const db = require('./db');
const logger = require('morgan')
const plantsController = require('./controllers/plantController')
const bodyParser = require('body-parser')




const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger('dev'))
app.use(bodyParser.json())
// app.use() middleware here ^ ///////////////////
app.get('/plants/:id' , plantsController.getOnePlant)
app.get('/plants', plantsController.getAllPlants)
app.get('/', (req, res) => res.send('This is root!'))

app.post('/plants', plantsController.createPlant)
app.put('/plants/:id', plantsController.updatePlant)
app.delete('/plants/:id', plantsController.deletePlant)


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))