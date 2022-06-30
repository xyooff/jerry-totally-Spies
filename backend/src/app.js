const express = require("express");
const path = require("path");

const cors = require("cors");
const UserRouter = require("./router/UserRouter");
// let's create express app

const app = express();

// use some application-level middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// load router

const router = require("./router");

// API routes User
app.use(UserRouter);

app.use(router);

const projectRouter = require("./router/ProjectRouter");

app.use(projectRouter);

// ready to export
module.exports = app;
