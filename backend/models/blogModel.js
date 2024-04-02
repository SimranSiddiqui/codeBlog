import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
    {
        title: 
        {
            type: String,
            required: true
        },
        blogContent:
        {
            type: String,
            required: true
        },
        datePosted: 
        {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export const Blog = mongoose.model('Blog', blogSchema);