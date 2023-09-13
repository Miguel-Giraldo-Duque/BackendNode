const express = require("express")
const routerApi = require("./routes/index")
const{logErrors,errorHandler,boomErrorHandler}=require('./mildewear/error.handler')
const app = express()
const port= process.env.PORT || 3000

app.use(express.json())

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.get("/api", (req, res) =>{
  res.send("Socio !!")
})



routerApi(app)

app.listen(port , () =>{
  console.log("Ñero")
})



