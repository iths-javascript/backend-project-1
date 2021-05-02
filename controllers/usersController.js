require('dotenv').config()

const users = require("../models/userModel.js")


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
const {Email, Password} = req.body

try {
    const token = await users.logIn(Email, Password)
    //ge token om det lyckas
    res.json({token: token})
  } catch (err) {
    res.json(err)
  }

}







// const decrypted = jwt.verify(token, SECRET_KEY)





module.exports = { registerUser, logIn}
