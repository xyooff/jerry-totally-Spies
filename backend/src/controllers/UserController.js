/* eslint-disable camelcase */
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const models = require("../models");

class UserController {
  static browse = (req, res) => {
    models.user
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static show = (req, res) => {
    const user = req.body;
    user.id = parseInt(req.params.id, 10);
    models.user
      .findById(user.id)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  // fonction d'authentification + vérification du password
  static login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).send({ error: "Please specify both email and password" });
    }

    models.user
      .findByMail(email)
      .then(async ([rows]) => {
        if (rows[0] == null) {
          res.status(403).send("Email ou mot de passe incorrect");
        } else {
          const { id, password: hash } = rows[0];

          if (await argon2.verify(hash, password)) {
            const token = await jwt.sign(
              {
                id,
              },
              process.env.JWT_AUTH_SECRET,
              {
                expiresIn: "1h",
              }
            );
            // response and HTTP cookie
            res
              .cookie("access_token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
              })
              .status(200)
              .send({
                id,
                email,
              });
          } else {
            res.status(401).send({
              error: "Invalid password",
            });
          }
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({
          error: err.message,
        });
      });
  };

  static edit = (req, res) => {
    const user = req.body;
    user.id = parseInt(req.params.id, 10);

    models.user
      .update(user)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = async (req, res) => {
    const { firstname, lastname, email, password, agence_id } = req.body;
    const { error } = Joi.object({
      firstname: Joi.string().max(255).required(),
      lastname: Joi.string().max(255).required(),
      email: Joi.string().email().max(255).required(),
      password: Joi.string().max().max(255).required(),
      agence_id: Joi.number().max(5).required(),
    }).validate({
      firstname,
      lastname,
      email,
      agence_id,
      password,
    });

    if (error) {
      res.status(422).json({ validationsErrors: error.details });
    } else {
      try {
        const hash = await argon2.hash(password);
        models.user
          .insert({
            firstname,
            lastname,
            email,
            password: hash,
            agence_id,
          })
          .then(([result]) => {
            res.status(201).send({
              firstname,
              lastname,
              email,
              agence_id,
              id: result.insertId,
            });
          })
          .catch((err) => {
            console.error(err);
            res.sendStatus(500).send({ error: err.message });
          });
      } catch (err) {
        console.error(err);
        res.sendStatus(500).send({ error: err.message });
      }
    }
  };

  static delete = (req, res) => {
    const userid = parseInt(req.params.id, 10);
    models.user
      .delete(userid)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static logout = (req, res) => {
    res.clearCookie("access_token").sendStatus(204);
  };
}

module.exports = UserController;
