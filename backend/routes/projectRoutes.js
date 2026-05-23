const express = require('express');
const projectController = require('../controllers/projectController');

const router = express.Router();

// POST - Create a new project
router.post('/', projectController.createProject);

// GET - Get all projects
router.get('/', projectController.getAllProjects);

// GET - Get project by ID
router.get('/:id', projectController.getProjectById);

// PUT - Update project
router.put('/:id', projectController.updateProject);

// DELETE - Delete project
router.delete('/:id', projectController.deleteProject);

module.exports = router;
