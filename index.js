const express = require("express");
const app = express();
const port = 3001;

app.get("/", () => {
    console.log("Welcome to Learn Git");
});

app.listen(port, () => {
    console.log("Yeyyy Server Started");
});
