const express = require("express")
const router = express.Router()

const auth = require("../middleware/auth.js")


const recipesController = require("../controllers/recipesController.js")

router.get("/ingredients", recipesController.getIngredients)

router.get("/recipes", recipesController.getAllRecipes)
router.post("/recipes", recipesController.addRecipe)

router.get("/recipes/:id", recipesController.getRecipe)
router.patch("/recipes/:id", recipesController.editRecipe)
router.delete("/recipes/:id", recipesController.deleteRecipe)


module.exports = router
