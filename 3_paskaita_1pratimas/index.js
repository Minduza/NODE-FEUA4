const express = require("express")
const cors = require("cors")

const PORT = 3000;

const app = express();

app.use(express.json())
app.use(cors())

const persons = []

app.get('/', (req, res)=> {
    res.send(persons)
})

app.post('/', (req, res)=> {
    persons.push(req.body.person)
    res.send(req.body)
})

app.listen(3000,()=>{
    console.log(`Server is running http://localhost:${PORT}`)
})