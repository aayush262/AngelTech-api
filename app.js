const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const mailRoutes = require('./routes/mail');

app.use(bodyParser.json());
app.use(cors());

app.use('/',(req,res,next)=>{
    res.send('ANGEL TECH backend documentation ..coming soon')
})
app.use(mailRoutes);

const port = process.env.PORT||8080;

app.listen(port,()=>{
    console.log('server is listening at ',port)
})