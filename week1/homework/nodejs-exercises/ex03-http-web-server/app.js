
{
    'use strict';

    const http=require('http');                                 //  import http component
    const serverPort=3000;                                      //  define the server port
    //                                                          //  prepare server message
    let statusMsg=`Initialized web server listening on port ${serverPort}`;
    //
    //                                                          //  prepare HTML response
    const responseHTML=`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <title>My First Web Server</title>
                <meta charset="utf-8" />
                <link rel="stylesheet" type="text/css" href="./style.css" />
            </head>
            <body>
                <h1>Is there anybody out there ?</h1>
                <div id="content"></div>
                <script src="./script.js"></script>
            </body>
        </html> `;
    //
    //                                                          //  prepare javascript response
    const responseCSS=`
        body {background-color:black; color:gold; text-align:center}
        #content {font-size: 2rem} `;
    //
    //                                                          //  prepare CSS response
    const responseJS=`
        document.getElementById('content').appendChild(
                    document.createTextNode('Welcome to Server-land!')); `;
    //
    try {
        const server = http.createServer(function(req, res) {   //  create a server
            if (req.url==='/script.js') {                       //  requesting file 'script.js'
                res.setHeader('Content-Type','text/javascript');
                res.write(responseJS);
            } else if (req.url==='/style.css') {                //  requesting file 'style.css'
                res.setHeader('Content-Type','text/css');
                res.write(responseCSS);
            } else {                                            //  requesting the root = HTML
                res.setHeader('Content-Type','text/html');
                res.write(responseHTML);
            };
            res.end();                                          //  end the response
        });
        server.listen(serverPort);                              //  start server listening
    } catch(anError) {
        statusMsg=anError;                                      //  prepare error message
    } finally {
        console.log(statusMsg);                                 //  display resulting message
    };
};


;
