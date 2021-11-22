const express = require("express");
const app = express();
const port = 3001;
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("learngit", "root", "", {
    host: "localhost",
    dialect: "mariadb",
});

app.get("/", () => {
    console.log("Welcome to Learn Git");
});

app.get("/sequelize-test-connection", async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
});

app.listen(port, () => {
    console.log("Yeyyy Server Started");
    console.log(`http://localhost:${port}/`);
});
