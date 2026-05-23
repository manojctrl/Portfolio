const pool = require('../config/db');

class Project {
  // Create a new project
  static async create(projectData) {
    const { title, description, image, link, technologies, startDate, endDate } = projectData;
    
    try {
      const query = `
        INSERT INTO projects (title, description, image, link, technologies, startDate, endDate, createdAt)
        VALUES (?, ?, ?, ?, ?, ?, ?, NOW())
      `;
      
      const [result] = await pool.execute(query, [
        title,
        description,
        image,
        link,
        technologies,
        startDate,
        endDate
      ]);
      
      return {
        id: result.insertId,
        ...projectData,
        createdAt: new Date()
      };
    } catch (error) {
      throw new Error(`Error creating project: ${error.message}`);
    }
  }

  // Get all projects
  static async getAll() {
    try {
      const query = 'SELECT * FROM projects ORDER BY createdAt DESC';
      const [rows] = await pool.execute(query);
      return rows;
    } catch (error) {
      throw new Error(`Error fetching projects: ${error.message}`);
    }
  }

  // Get project by ID
  static async getById(id) {
    try {
      const query = 'SELECT * FROM projects WHERE id = ?';
      const [rows] = await pool.execute(query, [id]);
      return rows[0] || null;
    } catch (error) {
      throw new Error(`Error fetching project: ${error.message}`);
    }
  }

  // Update project
  static async update(id, projectData) {
    const { title, description, image, link, technologies, startDate, endDate } = projectData;
    
    try {
      const query = `
        UPDATE projects 
        SET title = ?, description = ?, image = ?, link = ?, technologies = ?, startDate = ?, endDate = ?, updatedAt = NOW()
        WHERE id = ?
      `;
      
      const [result] = await pool.execute(query, [
        title,
        description,
        image,
        link,
        technologies,
        startDate,
        endDate,
        id
      ]);
      
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error(`Error updating project: ${error.message}`);
    }
  }

  // Delete project
  static async delete(id) {
    try {
      const query = 'DELETE FROM projects WHERE id = ?';
      const [result] = await pool.execute(query, [id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error(`Error deleting project: ${error.message}`);
    }
  }
}

module.exports = Project;
