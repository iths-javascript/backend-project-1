require('dotenv').config()
const PORT = process.env.PORT



const express = require("express")
const logger = require("./middleware/logger.js")
const usersRoutes = require("./routes/users.js")
const recipesRoutes = require("./routes/recipes.js")
const app = express()
app.use(logger)
app.use(express.json())

app.use(recipesRoutes)
app.use(usersRoutes)



app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
  })
  