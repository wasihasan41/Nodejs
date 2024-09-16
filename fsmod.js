const fs = require("fs");

fs.readFile("index.js", "utf8", (err, data) =>
{
    console.log(err, data);
})
console.log("done")// this console shows first due to call back it will take time for fetching the content of that file.


//for tackling this we use

console.log(fs.readFileSync("index.js").toString());
console.log("done"); //this type index file content will display first
console.log(fs.writeFile("text.txt", "write", () =>
{
    console.log("some edit by write file module");
}));
