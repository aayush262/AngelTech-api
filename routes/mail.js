const  Router= require('express').Router();

const { postMail } = require('./../controllers/mail');

Router.post('/mail',postMail);

module.exports=Router;