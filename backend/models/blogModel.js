import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        bookTitle: 
        {
            type: String,
            required: true
        },
        issueDate:
        {
            type: String,
            required: true
        },
        datePublished: 
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