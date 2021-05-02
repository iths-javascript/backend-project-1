const SECRET_KEY = process.env.SECRET_KEY
const jwt = require("jsonwebtoken")

function authenticateUser(id) {
  const token = jwt.sign(id, SECRET_KEY)
  return token
  //console.log(token)
  //console.log(jwt.verify(token, SECRET_KEY))
  // const decrypted = jwt.verify(token, SECRET_KEY)
}

module.exports = { authenticateUser }
