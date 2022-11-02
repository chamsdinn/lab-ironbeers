const { getRandomValues } = require('crypto');
const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const { getEnabledCategories } = require('trace_events');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/beers', async (req, res) => {
  try {
   const beersFromApi = await punkAPI.getBeers();

    console.log('Beers from the database: ', beersFromApi);

    res.render('beers', {beersFromApi : beersFromApi})
  } catch (error) {
    console.log(error);
  }
});

app.get('/random-beer', async (req, res) => {
  try{
    randomBeer = await punkAPI.getRandom();

    res.render('random-beer', {randomBeer : randomBeer}, {style :[styles.css]})
  }catch (error) {
    console.log(error);
    }
  });

app.listen(3000, () => console.log('🏃‍ on port 3000'));
