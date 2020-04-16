
const filterFiles = require("./mymodule");

filterFiles(process.argv[2], process.argv[3], (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    data.forEach(item => console.log(item));
})
