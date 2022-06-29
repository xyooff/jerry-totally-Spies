const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  static table = "project";

  insert(item) {
    return this.connection.query(
      `insert into ${ProjectManager.table} (title, description, avancement) values (?,?,?)`,
      [item.title, item.description, item.avancement]
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
