const http = require('http');

//create a server
let server = http.createServer((req, res) => {
    if (req.url === "/") {

        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <html>
        <head>
          <title>My First Web Server</title>
          <link rel="stylesheet" type="text/css" href="style.css" />
        </head>
        <body>
          <h1>Hello, anyone there?</h1>
          <div id="content"></div>
          <script src="./script.js"></script>
        </body>
      </html>
      `); //send a response back to the client
        res.end(); //end the response
    } else if (req.url === "/script.js") {
        res.setHeader('Content-Type', 'text/javascript');
        res.write(`
        document
        .getElementById('content')
        .appendChild(document.createTextNode('Welcome to Server-land!'));
        `);
        res.end();

    }
    else if (req.url === "/style.css") {
        res.setHeader('Content-Type', 'text/css');
        res.write(`
        body{
            background: url("https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") no-repeat fixed center;
            background-color:grey;
            font-family:"Arial";
            margin:20% auto;
            text-align:center;
            color:white;
        }
        h1{
            font-weight:bold;
            font-size:6rem;
            text-shadow: 3px 3px 10px #000000;
        }
        #content{
            color:white;
            opacity:.8;
            background-color:black;
            font-weight:bold;
            font-size:2rem;
            padding:10px 5px;
        }
        `);
        res.end();
    }
});

server.listen(3000); //the server listens on port 3000