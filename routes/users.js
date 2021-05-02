const express = require("express")
const router = express.Router()


const usersController = require("../controllers/usersController.js")

router.post("/register", usersController.registerUser)

router.post("/auth", usersController.logIn)

router.get("/me", usersController.currentUser)


module.exports = router
