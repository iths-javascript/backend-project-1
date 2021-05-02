const recipes = require("../models/recipesModel.js")
const jwt = require("jsonwebtoken")

async function getIngredients (req,res) {
    
    try {
        const results = await recipes.getIngredients()
        res.json(results)
      } catch (err) {
        res.json(err)
      }
}

function getAllRecipes() {}

function getRecipe() {}

function addRecipe() {
   //check if user token is true
}

function editRecipe() {
   //check if user token is true
}

function deleteRecipe() {

  //check if user token is true
}

module.exports = {
  getIngredients,
  getAllRecipes,
  getRecipe,
  addRecipe,
  editRecipe,
  deleteRecipe,
}
