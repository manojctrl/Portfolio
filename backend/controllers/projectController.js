const Project = require('../models/Project');

// Create a new project
exports.createProject = async (req, res) => {
  try {
    const { title, description, image, link, technologies, startDate, endDate } = req.body;

    // Validate required fields
    if (!title || !description) {
      return res.status(400).json({ 
        message: 'Title and description are required' 
      });
    }

    const project = await Project.create({
      title,
      description,
      image: image || null,
      link: link || null,
      technologies: technologies || null,
      startDate: startDate || null,
      endDate: endDate || null
    });

    res.status(201).json({
      message: 'Project created successfully',
      data: project
    });
  } catch (error) {
    res.status(500).json({ 
      message: error.message 
    });
  }
};

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.getAll();
    res.status(200).json({
      message: 'Projects fetched successfully',
      data: projects
    });
  } catch (error) {
    res.status(500).json({ 
      message: error.message 
    });
  }
};

// Get project by ID
exports.getProjectById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ 
        message: 'Project ID is required' 
      });
    }

    const project = await Project.getById(id);

    if (!project) {
      return res.status(404).json({ 
        message: 'Project not found' 
      });
    }

    res.status(200).json({
      message: 'Project fetched successfully',
      data: project
    });
  } catch (error) {
    res.status(500).json({ 
      message: error.message 
    });
  }
};

// Update project
exports.updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image, link, technologies, startDate, endDate } = req.body;

    if (!id) {
      return res.status(400).json({ 
        message: 'Project ID is required' 
      });
    }

    // Check if project exists
    const existingProject = await Project.getById(id);
    if (!existingProject) {
      return res.status(404).json({ 
        message: 'Project not found' 
      });
    }

    const updated = await Project.update(id, {
      title: title || existingProject.title,
      description: description || existingProject.description,
      image: image !== undefined ? image : existingProject.image,
      link: link !== undefined ? link : existingProject.link,
      technologies: technologies !== undefined ? technologies : existingProject.technologies,
      startDate: startDate !== undefined ? startDate : existingProject.startDate,
      endDate: endDate !== undefined ? endDate : existingProject.endDate
    });

    if (!updated) {
      return res.status(500).json({ 
        message: 'Failed to update project' 
      });
    }

    res.status(200).json({
      message: 'Project updated successfully',
      data: {
        id,
        title: title || existingProject.title,
        description: description || existingProject.description,
        image: image !== undefined ? image : existingProject.image,
        link: link !== undefined ? link : existingProject.link,
        technologies: technologies !== undefined ? technologies : existingProject.technologies,
        startDate: startDate !== undefined ? startDate : existingProject.startDate,
        endDate: endDate !== undefined ? endDate : existingProject.endDate
      }
    });
  } catch (error) {
    res.status(500).json({ 
      message: error.message 
    });
  }
};

// Delete project
exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ 
        message: 'Project ID is required' 
      });
    }

    // Check if project exists
    const existingProject = await Project.getById(id);
    if (!existingProject) {
      return res.status(404).json({ 
        message: 'Project not found' 
      });
    }

    const deleted = await Project.delete(id);

    if (!deleted) {
      return res.status(500).json({ 
        message: 'Failed to delete project' 
      });
    }

    res.status(200).json({
      message: 'Project deleted successfully',
      data: { id }
    });
  } catch (error) {
    res.status(500).json({ 
      message: error.message 
    });
  }
};
