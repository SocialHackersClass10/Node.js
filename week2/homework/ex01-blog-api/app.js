
{
    'use strict';

    const express    = require('express');
    const blogs      = require("./blogs");

    const serverApp  = express();
    const serverPort = 3000;

    const serverName = 'Blog API server'
    const versionStr = 'v.4.2';

    serverApp.use(express.json());
    serverApp.listen(serverPort,()=>console.log(`${serverName} ${versionStr
                            }: Started and listening on port ${serverPort}`));

    serverApp.get('/',(req,res)=>res.status(200)
                                    .end('Server endpoint is "/blogs"'));

    serverApp.get   ('/blogs'       ,blogs.list);
    serverApp.post  ('/blogs'       ,blogs.create);
    serverApp.get   ('/blogs/:title',blogs.read);
    serverApp.put   ('/blogs'       ,blogs.update);
    serverApp.delete('/blogs/:title',blogs.delete);

};


;

