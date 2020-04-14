
{
    'use strict';

    const fetch     = require('node-fetch');
    const targetURL = 'https://api.icndb.com/jokes/random';

    fetch(targetURL).then(res=>{if (res.ok) {return res.json()}
                                else {throw res.statusText}})
                    .then(json=>console.log(json.value.joke));
};


;

