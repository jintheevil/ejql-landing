const blogModel = require('../models/blogModel');

// Get all blogs
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await blogModel.find({})

        res.status(200).json({
            'message': 'Blogs fetched successfully.',
            'data': blogs,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            'message': err.message,
        })
    }
}

// Get Blog by ID
const getBlogByID = async (req, res) => {
    try {
        if (!req.params.id) {
            res.status(400).json({
                'message': 'Bad Request. ID is required.'
            })
        }

        const blog = await blogModel.find({
            id: req.body.id
        })

        res.status(200).json({
            'message': 'Blog fetched successfully.',
            'data': blog,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            'message': err.message
        })
    }
}

// Create a new blog post
const createNewBlog = async (req, res) => {
    try {
        console.log(req.body)
        const newBlog = new blogModel({
            blogTitle: req.body.blogTitle,
            blogDescription: req.body.blogDescription,
            blogContent: req.body.blogContent,
        })

        await newBlog.save();
        console.log('Blog post created', newBlog);
        res.status(201).json({
            'message': 'New blog post successfully created!'
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            'message': err.message,
        })
    }
}

module.exports = {
    getAllBlogs,
    getBlogByID,
    createNewBlog,
}