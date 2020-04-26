const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const mailRoutes = require('./routes/mail');
const formRoutes = require('./routes/form');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(cors());

app.use(mailRoutes);

app.use('/ucallz',formRoutes);

app.use('/',(req,res,next)=>{
    res.send('ANGEL TECH backend documentation ..coming soon')
})



const port = process.env.PORT||8080;

app.listen(port,()=>{
    console.log('server is listening at ',port)
})