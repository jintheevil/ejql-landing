const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
    {
        blogTitle: {
            type: String,
            required: true,
            trim: true,
        },
        blogDescription: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        blogContent: {
            type: String,
            required: true,
            trim: true,
        },
        timestamp: {
            type: Date,
            required: true,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

const BlogModel = mongoose.model('Blog', blogSchema);

module.exports = BlogModel;