const {Sequelize} = require('sequelize')


const db = new Sequelize ({
  dialect: 'sqlite',
  storage: 'database/database.db'
})


module.exports = db




// const sqlite = require("sqlite3")
// const db = new sqlite.Database("./database/database.db")

// db.run(`PRAGMA foreign_keys = ON`, (err) => {
//   err && console.log(err)
// })

// module.exports = db
