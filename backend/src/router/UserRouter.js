const express = require("express");

const { UserController } = require("../controllers");

const UserRouter = express.Router();

UserRouter.get("/users", UserController.browse);
UserRouter.get("/users/:id", UserController.show);
// UserRouter.get("/users/:id/seance", UserController.show);
UserRouter.get("/logout", UserController.logout);
UserRouter.put("/users/:id", UserController.edit);
UserRouter.post("/users", UserController.add);
UserRouter.post("/login", UserController.login);
UserRouter.delete("/users/:id", UserController.delete);

module.exports = UserRouter;
