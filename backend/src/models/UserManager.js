const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (firstname, lastname, email, password, agence_id) values (?, ?, ?, ?, ?)`,
      [user.firstname, user.lastname, user.email, user.password, user.agence_id]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${UserManager.table} set firstname = ?, lastname = ?, email = ?, agence_id = ? where id = ?`,
      [user.firstname, user.lastname, user.email, user.agence_id, user.id]
    );
  }

  findByMail(email) {
    return this.connection.query(
      `select * from ${UserManager.table} where email = ?`,
      [email]
    );
  }

  findSeance(user) {
    return this.connection.query(
      `SELECT title_formula, seance_date, url_HD , url_SD, status FROM  ${UserManager.table}
      INNER JOIN seance
      on user.id = seance.user_id
      INNER JOIN sessiongallery
      on seance.id = sessiongallery.seance_id
      INNER JOIN formula
      on seance.formula_id = formula.id
      WHERE user.id = ?
      ORDER BY seance_date;`,
      [user.id]
    );
  }

  delete(userId) {
    return this.connection.query(
      `
    DELETE FROM ${this.table} WHERE id = ?`,
      [userId]
    );
  }
}

module.exports = UserManager;
