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

  findallinfos(id) {
    return this.connection.query(
      `SELECT agence_id, collaborators.project_id as colProId, user_id, title, description, priorite, deadline, datePublish, avancement, agences_id, city, url, tech.id as idDelaTech FROM user
      INNER JOIN collaborators
      on user.id = collaborators.user_id
      INNER JOIN project
      on collaborators.project_id = project.id
      INNER JOIN agence ON agence.id = project.agences_id 
      INNER JOIN tech
      on project.id = tech.project_id
      where tech.project_id = ${id}`
    );
  }

  //  affiche les projet + la ville
  // `SELECT * FROM project INNER JOIN agence ON agence.id = project.agences_id`
  update(item) {
    return this.connection.query(
      `update ${ProjectManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = ProjectManager;
