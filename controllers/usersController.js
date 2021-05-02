require("dotenv").config()

const users = require("../models/userModel.js")
const auth = require("../middleware/auth.js")

async function registerUser(req, res, next) {
  const { Email, Password } = req.body
  try {
    const results = await users.registerUser(Email, Password)
    res.json(results)
  } catch (err) {
    res.json(err)
  }
}

async function logIn(req, res) {
  const { Email, Password } = req.body

  try {
    const token = await users.logIn(Email, Password)
    res.json({ token: token })
  } catch (err) {
    res.json(err)
  }
}

function currentUser(req, res) {
  const token = req.headers.authorization.replace("Bearer ", "")
  const id = auth.currentUser(token)
 

  if (id) {
    res.json({ user: id })
  } else {
    res.json(err)
  }
}

module.exports = { registerUser, logIn, currentUser }
