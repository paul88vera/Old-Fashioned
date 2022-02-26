const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Post model
class Drinks extends Model {
    // static comment(body, models){
    //   return models.Comment.create({
    //     user_id: body.user_id,
    //     drinks_id: body.drinks_id,
    //   }).then(() => {
    //   return Drinks.findOne({
    //     where: {
    //       id: body.drinks_id,
    //     },
    //     attributes: [
    //       "id",
    //       "ingredients",
    //       "title",
    //       "created_at",
    //     ],
    //     include: 
    //       {
    //         model: models.Comment,
    //         attributes: [
    //           "id",
    //           "comment_text",
    //           "drinks_id",
    //           "user_id",
    //           "created_at",
    //         ],
    //         include: {
    //           model: models.User,
    //           attributes: ["username"],
    //         },
    //       },
    //   });
    }

// create fields/columns for Post model
Drinks.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "drinks",
  }
)

module.exports = Drinks;
