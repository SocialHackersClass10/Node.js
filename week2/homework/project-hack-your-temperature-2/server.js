
{
    'use strict';

    const express    = require('express');
    const xprsshb    = require("express-handlebars");

    const serverApp  = express();
    const serverPort = 3000;

    serverApp.engine('handlebars', xprsshb({ defaultLayout:'main' }));
    serverApp.set('view engine','handlebars');
    serverApp.use(express.json());
    serverApp.use(express.urlencoded({extended:true}));

    serverApp.get('/',(req,res)=>res.render('index'));

    serverApp.post('/weather',(req,res)=>{res.status(200).json(req.body)});

    serverApp.listen(serverPort,()=>console.log(
        `PROJECT: Hack Your Temperature II - listening on port`,serverPort));

};


;

