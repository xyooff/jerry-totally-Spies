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

  findProject() {
    return this.connection.query(
      `SELECT project.title, project.description, project.avancement FROM  ${UserManager.table}
      INNER JOIN collaborators
      on user.id = collaborators.user_id
      INNER JOIN project
      on collaborators.project_id = project.id`
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
