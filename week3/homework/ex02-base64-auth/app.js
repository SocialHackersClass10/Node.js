
{
    'use strict';

    const fetch   = require('node-fetch');
    const argURL  = 'https://restapiabasicauthe-sandbox.mxapps.io/api/books';
    const argAuth = Buffer.from('admin:hvgX8KlVEa').toString('base64');

    fetch(argURL,{method:'GET',headers:{'Authorization':'Basic '+argAuth}})
        .then(res=>{if (res.ok) {return res.json()}
                    else {throw res.statusText}})
        .then(json=>console.log(json));
};


;

