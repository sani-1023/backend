const express  = require("express")
const cookieParser = require('cookie-parser')

const app = express()
const errorMiddleWare = require("../backend/middleware/error")




app.use(express.json())
app.use(cookieParser())


// route import
const product = require("./routes/productRoute")
const bank = require("./routes/bankRoute")
const user = require("./routes/userRoute")

app.use("/api/v1",product)
app.use("/api/v1",bank)
app.use("/api/v1",user)


app.use(errorMiddleWare)



module.exports = app