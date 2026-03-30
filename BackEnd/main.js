let express = require("express")
let app = express()

app.listen(3000, ()=>
    {
        console.log("Sevidor rodando na porta 3000")
    }
)

app.get("/", (req, res)=> 
    {
        res.send("Hello World")
    }
)

