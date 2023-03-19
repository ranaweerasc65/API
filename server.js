



const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');




dotenv.config()
const app= express()
const port = process.env.PORT || 8000




// Set up middleware
app.use(bodyParser.json());
app.use(cors());






//database connection
mongoose.set("strictQuery",false);
const connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('MongoDB database connected');

    }catch(err){
        console.log(`ERROR:${err}`);
    }
}
// Create routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, ()=>{
    connect();
    console.log('server listening on port', port)
})