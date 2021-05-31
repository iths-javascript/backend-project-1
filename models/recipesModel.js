const db = require("../database/connection.js")

const { DataTypes } = require("sequelize")
const User = require("./userModel")
const Ingredients = require("./ingredientsModel.js")

const Recipes = db.define("Recipes", {
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

const RecipeDetails = db.define("RecipeDetails", {
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  Instructions: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

Recipes.belongsTo(User)
RecipeDetails.belongsTo(Recipes)
//RecipeDetails.hasMany(Ingredients)





Recipes.getAllRecipes = async (page, filter) => {



  let limit = 10
  let offset = (page - 1) * limit

  if (page && !filter) {
    try {
      const recipes = Recipes.findAll({
        offset: offset,
        limit: limit,
      })

      return recipes
    } catch (err) {}
  } else if (filter && !page) {
    try {
      const recipes = Recipes.findAll({
        where: {
          Name: { [Op.substring]: filter },
        },
      })

      return recipes
    } catch (err) {}
  } else if (filter && page) {
    try {
      const recipes = Recipes.findAll({
        where: {
          Name: { [Op.substring]: filter },
        },
        offset: offset,
        limit: limit
      })

      return recipes
    } catch (err) {}
  } else {
    try {
      const recipes = Recipes.findAll()

      return recipes
    } catch (err) {}
  }
}











Recipes.getRecipe = (recipeId) => {
  try {
    const recipe = Recipes.findOne({
      where: {
        id: recipeId,
      },
    })

    return recipe
  } catch (err) {}
}

Recipes.addRecipe = async (data, id) => {
  try {
    const newRecipe = await Recipes.create({ Name: data, UserId: id })
    return newRecipe
  } catch (err) {}
}

Recipes.editRecipe = async (data, recipeId) => {
  try {
    const edited = await Recipes.update(
      { Name: data },
      { where: { id: recipeId } }
    )

    return edited
  } catch (err) {}
}

Recipes.deleteRecipe = async (recipeId) => {
  try {
    const deleted = Recipes.destroy({
      where: {
        id: recipeId,
      },
    })

    return deleted
  } catch (err) {}
}

Recipes.matchOwnerId = async (userId, recipeId) => {
  try {
    const match = await Recipes.findOne({
      where: {
        id: recipeId,
        UserId: userId,
      },
    })

    return match
  } catch (err) {}
}
;(module.exports = Recipes), RecipeDetails
