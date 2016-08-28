'use strict';

// Type effectiveness dictionaries. Constant name is the type that is defensive.
const normal = {normal: 1, fire: 1, water: 1, grass: 1, electric: 1, ice: 1,
                bug: 1, poison: 1, fighting: 2, psychic: 1, ghost: 0, dark: 1,
                rock: 1, ground: 1, steel: 1, dragon: 1, fairy: 1, flying: 1};
const fire =   {normal: 1, fire: 0.5, water: 2, grass: 0.5, electric: 1, ice: 0.5,
                bug: 0.5, poison: 1, fighting: 1, psychic: 1, ghost: 1, dark: 1,
                rock: 2, ground: 2, steel: 0.5, dragon: 1, fairy: 0.5, flying: 1};
const water =  {normal: 1, fire: 0.5, water: 0.5, grass: 2, electric: 2, ice: 0.5,
                bug: 1, poison: 1, fighting: 1, psychic: 1, ghost: 1, dark: 1,
                rock: 1, ground: 1, steel: 0.5, dragon: 1, fairy: 1, flying: 1};
const grass =  {normal: 1, fire: 2, water: 0.5, grass: 0.5, electric: 0.5, ice: 2,
                bug: 2, poison: 2, fighting: 1, psychic: 1, ghost: 1, dark: 1,
                rock: 1, ground: 0.5, steel: 1, dragon: 1, fairy: 1, flying: 2};
const electric = {normal: 1, fire: 1, water: 1, grass: 1, electric: 0.5, ice: 1,
                bug: 1, poison: 1, fighting: 1, psychic: 1, ghost: 1, dark: 1,
                rock: 1, ground: 2, steel: 0.5, dragon: 1, fairy: 1, flying: 0.5};
const ice =    {normal: 1, fire: 2, water: 1, grass: 1, electric: 1, ice: 0.5,
                bug: 1, poison: 1, fighting: 2, psychic: 1, ghost: 1, dark: 1,
                rock: 2, ground: 1, steel: 2, dragon: 1, fairy: 1, flying: 1};
const bug =    {normal: 1, fire: 2, water: 1, grass: 0.5, electric: 1, ice: 1,
                bug: 1, poison: 1, fighting: 0.5, psychic: 1, ghost: 1, dark: 1,
                rock: 2, ground: 0.5, steel: 1, dragon: 1, fairy: 1, flying: 2};
const poison = {normal: 1, fire: 1, water: 1, grass: 0.5, electric: 1, ice: 1,
                bug: 0.5, poison: 0.5, fighting: 0.5, psychic: 2, ghost: 1, dark: 1,
                rock: 1, ground: 2, steel: 1, dragon: 1, fairy: 0.5, flying: 1};
const fighting = {normal: 1, fire: 1, water: 1, grass: 1, electric: 1, ice: 1,
                bug: 0.5, poison: 1, fighting: 1, psychic: 2, ghost: 1, dark: 0.5,
                rock: 0.5, ground: 1, steel: 1, dragon: 1, fairy: 2, flying: 2};
const psychic = {normal: 1, fire: 1, water: 1, grass: 1, electric: 1, ice: 1,
                bug: 2, poison: 1, fighting: 0.5, psychic: 0.5, ghost: 2, dark: 2,
                rock: 1, ground: 1, steel: 1, dragon: 1, fairy: 1, flying: 1};
const ghost =  {normal: 0, fire: 1, water: 1, grass: 1, electric: 1, ice: 1,
                bug: 0.5, poison: 0.5, fighting: 0, psychic: 1, ghost: 2, dark: 2,
                rock: 1, ground: 1, steel: 1, dragon: 1, fairy: 1, flying: 1};
const dark =   {normal: 1, fire: 1, water: 1, grass: 1, electric: 1, ice: 1,
                bug: 2, poison: 1, fighting: 2, psychic: 0, ghost: 0.5, dark: 0.5,
                rock: 1, ground: 1, steel: 1, dragon: 1, fairy: 2, flying: 1};
const rock =   {normal: 0.5, fire: 0.5, water: 2, grass: 2, electric: 1, ice: 1,
                bug: 1, poison: 0.5, fighting: 2, psychic: 1, ghost: 1, dark: 1,
                rock: 1, ground: 2, steel: 2, dragon: 1, fairy: 1, flying: 0.5};
const ground = {normal: 1, fire: 1, water: 2, grass: 2, electric: 0, ice: 2,
                bug: 1, poison: 0.5, fighting: 1, psychic: 1, ghost: 1, dark: 1,
                rock: 0.5, ground: 1, steel: 1, dragon: 1, fairy: 1, flying: 1};
const steel =  {normal: 0.5, fire: 2, water: 1, grass: 0.5, electric: 1, ice: 0.5,
                bug: 0.5, poison: 0, fighting: 2, psychic: 0.5, ghost: 1, dark: 1,
                rock: 0.5, ground: 2, steel: 0.5, dragon: 0.5, fairy: 0.5, flying: 0.5};
const dragon = {normal: 1, fire: 0.5, water: 0.5, grass: 0.5, electric: 0.5, ice: 2,
                bug: 1, poison: 1, fighting: 1, psychic: 1, ghost: 1, dark: 1,
                rock: 1, ground: 1, steel: 1, dragon: 2, fairy: 2, flying: 1};
const fairy =  {normal: 1, fire: 1, water: 1, grass: 1, electric: 1, ice: 1,
                bug: 0.5, poison: 2, fighting: 0.5, psychic: 1, ghost: 1, dark: 0.5,
                rock: 1, ground: 1, steel: 2, dragon: 0, fairy: 1, flying: 1};
const flying = {normal: 1, fire: 1, water: 1, grass: 0.5, electric: 2, ice: 2,
                bug: 0.5, poison: 1, fighting: 0.5, psychic: 1, ghost: 1, dark: 1,
                rock: 2, ground: 0, steel: 1, dragon: 1, fairy: 1, flying: 1};

// Combine types into one object.
const typeChart = {normal: normal, fire: fire, water: water, grass: grass,
                   electric: electric, ice: ice, bug: bug, poison: poison,
                   fighting: fighting, psychic: psychic, ghost: ghost, dark: dark,
                   rock: rock, ground: ground, steel: steel, dragon: dragon,
                   fairy: fairy, flying: flying};

// TypeEff object constructor
const TypeEff = function() {
  let result = {};
  for (let i = 0; i < arguments.length; i++) {

    let currentType = typeChart[arguments[i]];

    for (let type in currentType) {
      if(result[type] === undefined) {
        result[type] = currentType[type];
      }
      else {
        result[type] *= currentType[type];
      }
    }

  }
  return result;
};
