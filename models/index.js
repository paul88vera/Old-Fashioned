const User = require('./User');
const Drinks = require('./Drinks');
const Comment = require('./Comment');


// create associations
User.hasMany(Drinks, {
    foreignKey: 'user_id'
});

Drinks.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

// User.belongsToMany(Drinks, {
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL',
// });

Drinks.belongsToMany(User, {
    through: Comment,
    foreignKey: 'drinks_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(Drinks, {
    foreignKey: 'drinks_id',
    onDelete: 'SET NULL'
});

module.exports = { User, Drinks, Comment };
