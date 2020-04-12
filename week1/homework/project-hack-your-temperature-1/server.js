
{
    'use strict';

    const express    = require('express');
    const serverApp  = express();
    const serverPort = 3000;

    serverApp.get('/',(req,res)=>{
        res .set('Content-Type','text/html')
            .status(200)
            .send('hello from backend to frontend!')
            .end()
        });

    serverApp.listen(serverPort,()=>console.log(
        `PROJECT: Hack Your Temperature listening on port`,serverPort));

};


;

