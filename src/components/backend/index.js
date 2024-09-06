require('dotenv').config({path:__dirname+'/./../../.env'})
console.log(__dirname+'/./../.env')

const express = require("express");
const app = express();
const mongoose = require("mongoose");

var cors = require('cors')
app.use(cors())

console.log(process.env.REACT_APP_MONGODB_URL)
mongoose.connect(
    'mongodb+srv://vikramchandar04:B3h49GBDjkBlsSUP@cluster0.5b4py.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/test', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json());

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

app.listen(3000, () => console.log('Server Started'))