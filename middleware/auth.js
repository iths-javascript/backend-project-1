const SECRET_KEY = process.env.SECRET_KEY
const jwt = require("jsonwebtoken")

function authenticateUser(id) {

  const token = jwt.sign(id, SECRET_KEY)
  return token
}

function currentUser(token){
  const user = jwt.verify(token, SECRET_KEY)
 

  return user

}
module.exports = { authenticateUser, currentUser }
