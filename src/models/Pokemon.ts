import { Model } from "mongoose";

import mongoose from "mongoose";

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  abilities: {
    type: Array,
    required: false,
  },
  base_experience: {
    type: Number,
    required: false,
  },
  game_indices: {
    type: Array,
    required: false,
  },
  height: {
    type: Number,
    required: false,
  },
  held_items: {
    type: Array,
    required: false,
  },
  id: {
    type: Number,
    required: false,
  },
  is_default: {
    type: Boolean,
    required: false,
  },
  location_area_encounters: {
    type: String,
    required: false,
  },
  order: {
    type: Number,
    required: false,
  },
  past_types: {
    type: Array,
    required: false,
  },
  species: {
    type: mongoose.Types.ObjectId,
    required: false,
    ref: 'especies',
    index: true
  },
  sprites: {
    type: Array,
    required: false,
  },
  stats: {
    type: Array,
    required: false,
  },
  types: {
    type: Array,
    required: false,
  },
  weight: {
    type: Number,
    required: false,
  },
});


const Pokemon = mongoose.model("pokemons", pokemonSchema);
export default Pokemon;