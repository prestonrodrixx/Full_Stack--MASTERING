const monggose = require('mongoose');

const ponkemonModel = monggose.Schema({
  pokemonname: {
    type: String,
    required: true,
  },
  maxcp: {
    type: Number,
    required: true,
  },
  attack: {
    type: Number,
    required: true,
  },
  defence: {
    type: Number,
    required: true,
  },
  stamina: {
    type: Number,
    required: true,
  },
  family: {
    type: String,
    required: true,
  },
  weaknesses: {
    type: String,
    required: true,
  },
  resistances: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = monggose.model('pokemon', ponkemonModel);
