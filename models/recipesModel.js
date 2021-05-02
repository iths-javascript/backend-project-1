const db = require("../database/connection.js")

function getIngredients() {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM Ingredients`, (err, res) =>{
      if (err) {
          reject(err)
        } else {
        resolve(res)
      }
    })
  })
}

function getAllRecipes() {}

function getRecipe() {}

function addRecipe() {}

function editRecipe() {}

function deleteRecipe() {}

module.exports = {
  getIngredients,
  getAllRecipes,
  getRecipe,
  addRecipe,
  editRecipe,
  deleteRecipe,
}
