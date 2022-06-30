const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  static table = "project";

  insert(projet) {
    return this.connection.query(
      `insert into ${ProjectManager.table} (title, description, priorite, deadline, datePublish, avancement) values (?,?,?,?,?,?)`,
      [
        projet.title,
        projet.description,
        projet.priorite,
        projet.deadline,
        projet.datePublish,
        projet.avancement,
      ]
    );
  }

  findallinfos() {
    return this.connection.query(
      `SELECT * FROM ${this.table} INNER JOIN agence ON ${this.table}.agences_id=agence.id INNER JOIN tech ON tech.project_id=${this.table}.id WHERE tech.project_id = project.id`
    );
  }

  update(item) {
    return this.connection.query(
      `update ${ProjectManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = ProjectManager;
