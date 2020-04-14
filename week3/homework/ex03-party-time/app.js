
{
    'use strict';

    const fetch   = require('node-fetch');
    const apiBody = { name:'DOT.NOT', numberOfPeople:42 };
    const theMsg  = `\nMaking a Party reservation for ${apiBody.numberOfPeople
                                    } people under the name ${apiBody.name}`;
    const apiArgs = { method  : 'POST',
                      body    : JSON.stringify(apiBody),
                      headers : { 'Content-Type':'application/json' } };
    const apiURL  = 'https://reservation100-sandbox.mxapps.io/api/reservations';

    asyncFetch();

    async function asyncFetch() {
        let theData;
        console.log(theMsg);
        try {
            const fRes=await fetch(apiURL,apiArgs);
            if (!fRes.ok) {throw 'Fetch result:\n'+fRes.statusText};
            const resType=fRes.headers.get("content-type");
            if ((resType)&&(resType.indexOf("application/json")!==-1)) {
                theData=await fRes.json();
            } else {
                theData=await fRes.text();
            };
            console.log('Reservation success:');
        } catch(anError) {
            theData='Caught an error:\n'+anError;
        } finally {
            console.log(theData,'\n');
        };
    };
};


;

