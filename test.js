const wifi = require("wifi-password")
const express = require("express")
const app = express()
var i = 5

app.get("/home", (req, res)=>{


res.write("Please wait the  has been statred")
    setInterval(() => {
        i--

        if(i>=0){
        res.write("The  is started <br>") 
        } 
        else if(i<0 && i> -2){
            wifi().then((data)=>{res.write(`The wifi  is ${data}`);})
        }
        else if (i<=-3){
            res.end()
        }
    }, 1000);
})
var i = 0


app.get("/send",(req,res)=>{
    setInterval(() => {
        i++
     if(i <=10){
        res.send(`This is the data ${i}`)
        
     }
     else{
         res.end()
     }
    }, 1000);





})

app.listen(1234,()=>{console.log("server is live");})

