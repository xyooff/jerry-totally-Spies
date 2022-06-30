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
      `SELECT * FROM project INNER JOIN agence ON agence.id = project.agences_id`
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
