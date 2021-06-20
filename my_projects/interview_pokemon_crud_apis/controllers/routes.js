const router = require('express').Router();
const pokedata = require('../models/ponkemonModel');

router.get('/', (req, res) => {
  var myPokemons;
  pokedata.find({}, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data) {
      myPokemons = data;
    }
    res.render('index', { data: myPokemons });
  });
});

router.get('/view-all', (req, res) => {
  var myPokemons;
  pokedata.find({}, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data) {
      myPokemons = data;
    }
    res.render('allpokemons', { data: myPokemons, ids: myPokemons._id });
    console.log(myPokemons[0])
  });
});

// To Add Data to MongoDB
router.post('/add', (req, res) => {
  const pokemonname = req.body.pokemonname;
  const maxcp = req.body.maxcp;
  const attack = req.body.attack;
  const defence = req.body.defence;
  const stamina = req.body.stamina;
  const family = req.body.family;
  const weaknesses = req.body.weaknesses;
  const resistances = req.body.resistances;
  const description = req.body.description;

  pokedata({
    pokemonname: pokemonname,
    maxcp: maxcp,
    attack: attack,
    defence: defence,
    stamina: stamina,
    family: family,
    weaknesses: weaknesses,
    resistances: resistances,
    description: description,
  }).save(function (err, doc) {
    if (err) {
      console.log(err);
    }
    res.redirect('/view-all');
  });
});

// To view data of specific id
router.get('/update/:id', (req, res, next) => {
  var myPokemons;
  const pokemonId = req.params.id;
  pokedata.findById(pokemonId, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data) {
      myPokemons = data;
    }
    res.render('editPokemon', { pokemons: myPokemons });
  });
});

// To Update Data from MongoDB
router.post('/update', (req, res) => {
  const id = req.body.id;
  const pokemonname = req.body.pokemonname;
  const maxcp = req.body.maxcp;
  const attack = req.body.attack;
  const defence = req.body.defence;
  const stamina = req.body.stamina;
  const family = req.body.family;
  const weaknesses = req.body.weaknesses;
  const resistances = req.body.resistances;
  const description = req.body.description;
  pokedata.findOneAndUpdate(
    { _id: id },
    {
      pokemonname: pokemonname,
      maxcp: maxcp,
      attack: attack,
      defence: defence,
      stamina: stamina,
      family: family,
      weaknesses: weaknesses,
      resistances: resistances,
      description: description,
    },
    (err, doc) => {
      res.redirect('/view-all');
    }
  );
});

// To Delete Data from MongoDB
router.get('/delete/:id', (req, res) => {
  const id = req.params.id;
  pokedata.findOneAndRemove({ _id: id }, () => {
    res.redirect('/view-all');
  });
});

module.exports = router;
