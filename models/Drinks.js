// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// // create our Post model
// class Drinks extends Model {}
// // create fields/columns for Post model
// Drinks.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     ingredients: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "user",
//         key: "id",
//       },
//     },
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "drinks",
//   }
// )

// module.exports = Drinks;
