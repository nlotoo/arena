const express = require("express")()
const app = express

const { PORT } = require('./config/config')
router = require('./router')



const expressConfig = require("./config/express");
expressConfig(app)

app.use(router)


//implementing server sent events



app.listen(PORT, () => console.log(`Server listen on port http://localhost:${PORT}/`))

//express.listen(PORT, () => console.log(`Server listen on port http://localhost:${PORT}/`))