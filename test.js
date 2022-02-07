const express = require("express")
const app = express()

const port = 8000 || process.env.port

app.get("/",(req, res)=>{


    res.send("hellow world")
})
app.get("/home",(req, res)=>{


    res.send("hellow world")
})

app.listen(port)
