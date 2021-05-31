const db = require('./connection.js')
const recipes = require('../models/recipesModel.js')
const ingredients = require('../models/ingredientsModel.js')
const users = require('../models/userModel.js')

db.sync()



// const db = require("./connection")

// db.serialize(() => {
//   db.run(`DROP TABLE IF EXISTS "Ingredients"`, (err) => {
//     err && console.log(err)
//   })

//   db.run(`DROP TABLE IF EXISTS "Users"`, (err) => {
//     err && console.log(err)
//   })
//   db.run(`DROP TABLE IF EXISTS "Recipes"`, (err) => {
//     err && console.log(err)
//   })

//   db.run(
//     `
//     CREATE TABLE "Ingredients" (
//         "Name"	TEXT NOT NULL UNIQUE,
//         "Ingredient_Id"	INTEGER NOT NULL UNIQUE,
//         PRIMARY KEY("Ingredient_Id" AUTOINCREMENT)
//     )`,
//     (err) => {
//       err && console.log(err)
//     }
//   )


//   db.run(
//     `CREATE TABLE "Users" (
//         "Email"	TEXT NOT NULL UNIQUE,
//         "User_Id"	INTEGER NOT NULL UNIQUE,
//         "Password"	TEXT NOT NULL,
//         PRIMARY KEY("User_Id" AUTOINCREMENT)
//     )`,
//     (err) => {
//       err && console.log(err)
//     }
//   )
// })



