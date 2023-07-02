const express = require('express')
const mongoose = require('mongoose')
const Contact = require('./models/contactModel')
const app = express()
const cors = require('cors')

app.use(cors(
    {
        origin: ["https://deploy-mern-frontend.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
    res.send('Hello')
})


app.get('/contact', async(req, res) => {
    try {
        const contact = await Contact.find({});
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})



app.post('/contact', async(req, res) => {
    try {
        const contact = await Contact.create(req.body)
        res.status(200).json(contact);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})




mongoose.set("strictQuery", false)
mongoose.
connect('mongodb+srv://admin:admin@form.sun6pig.mongodb.net/data?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(8081, ()=> {
        console.log(`App is running on port 8081`)
    });
}).catch((error) => {
    console.log(error);
});