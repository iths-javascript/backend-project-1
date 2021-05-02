
const auth = require("../middleware/auth.js")
const db = require("../database/connection.js")
const bcrypt = require("bcryptjs")
const salt = 10

function registerUser(email, password) {
  const hashed = bcrypt.hashSync(password, salt)

  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO Users ("Email", "Password") VALUES (?, ?)`,
      [email, hashed],
      function (err) {
        if (err) {
          reject(err)
        } else {
          resolve({ message: `new user added with id ${this.lastID}` })
        }
      }
    )
  })
}

function logIn(email, password) {

  return new Promise((resolve, reject) => {
    db.get(
      `SELECT Password, User_Id FROM Users WHERE Email LIKE ?`,
      [email],
      (err, res) => {
        

        if (err) {
          reject(err)
        }

        if (bcrypt.compareSync(password, res.Password)) {
          resolve(auth.authenticateUser(res.User_Id))
        } else {
          reject({ message: "no match(send error status)"  })
        }
      }
    )
  })
}

module.exports = { registerUser, logIn }
