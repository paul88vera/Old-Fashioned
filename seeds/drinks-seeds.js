const Drinks = require('../models');

const drinksdata = [
  {
    title: 'Juicy',
    ingredients: 'Watermelon, sugar',
    user_id: 1
  }
];

const seedDrinks = () => Drinks.bulkCreate(drinksdata);

module.exports = seedDrinks;