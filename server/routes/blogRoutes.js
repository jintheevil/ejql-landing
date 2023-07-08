const express = require('express');
const router = express.Router();

const { getAllBlogs, getBlogByID, createNewBlog } = require('../controllers/blogController');

// Get all blogs
router.get('', getAllBlogs)

// Get blog by id
router.get('/:id', getBlogByID)

// Create a blog
router.post('', createNewBlog)

module.exports = router;