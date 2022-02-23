const Post = require('../models');

const postdata = [
    {
        title: 'Old Fashioned', 
        ingredients: 'Whiskey, sugar, bitters, orange twist, cocktail cherry',
        description: 'The classic, and our name sake'
    },
    {
        title: 'Margarita', 
        ingredients: 'Tequila, cointreau, lime juice, salt, lime slice',
        description: 'A drink popular in Mexico, and stateside'
    },
    {
        title: 'Cosmopolitan',
        ingredients: 'Vodka, triple sec, cranberry juice, sweetened lime juice',
        description: 'A drink made infamous by hit TV show Sex and the City'
    },
    {
        title: 'Daiquiri',
        ingredients: 'Rum, citrus juice, sugar',
        description: 'Some say it is an adult slushie, but you should decide for yourself'
    },
    {
        title: 'Mojito',
        ingredients: 'White rum, sugar, lime juice, soda water, mint',
        description: 'The perfect summer drink'
    },
    {
        title: 'Martini', 
        ingredients: 'Gin, vermouth, olive or lemon twist',
        description: 'An American invention'
    }, 
    {
        title: 'Moscow Mule',
        ingredients: 'Vodka, spicy ginger beer, lime juice', 
        description: 'A classic in a copper mug'
    },
    {
        title: 'White Russian', 
        ingredients: 'Vodka, coffee liquer, cream',
        description: 'A decadent spin on the Black Russian'
    },
    {
        title: 'Black Russian',
        ingredients: 'Vodka and coffee liquer', 
        description: 'Named for its main ingredient- Russian vodka'
    },
    {
        title: 'French 75', 
        ingredients: 'Gin, champagne, lemon juice, sugar',
        description: 'Dates back to World War I'
    }
]

const seedLibrary = () => Post.bulkCreate(postdata, {individualHooks: true});

module.exports = seedLibrary;