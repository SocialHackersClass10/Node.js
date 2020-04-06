const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

app.use(express.json())

app.get("/", (req, res) => {
    res.send(`
    <h1>This is the server!</h1>
    <h3>App listening at port ${port}</h3>
    `)
})

//CREATE FILE
app.post('/blogs', (req, res) => {
    fs.writeFileSync(`${req.body.title}.txt`, req.body.content);
    res.end('OK');
});

//READ FILE
app.get('/blogs/:title', (req, res) => {
    res.sendfile(req.param("title") + ".txt");
});

//UPDATE FILE
app.put('/blogs', (req, res) => {
    if (fs.existsSync(`${req.body.title}.txt`)) {
        fs.writeFileSync(`${req.body.title}.txt`, req.body.content);
        res.end('OK');
    }
    else {
        res.end('Post does not exist.');
    }
});

//DELETE FILE
app.delete('/blogs/:title', (req, res) => {
    fs.unlinkSync(req.param("title") + ".txt");
    res.end('OK');
})


app.listen(port, () => console.log("Server up and running"));
