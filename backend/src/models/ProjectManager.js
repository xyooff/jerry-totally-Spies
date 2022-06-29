const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  static table = "project";

  insert(projet) {
    return this.connection.query(
      `insert into ${ProjectManager.table} (title, description, avancement) values (?,?,?)`,
      [projet.title, projet.description, projet.avancement]
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
