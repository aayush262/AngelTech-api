const  Router= require('express').Router();

const { postForm,postForm1,postForm2,postForm3,postForm4,postForm5 } = require('./../controllers/form');

Router.post('/form',postForm)

Router.post('/form1',postForm1)

Router.post('/form2',postForm2)

Router.post('/form3',postForm3)

Router.post('/form4',postForm4)

Router.post('/form5',postForm5)


module.exports=Router;