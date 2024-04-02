import express from "express";
import {Blog} from '../models/blogModel.js';
const router = express.Router();


router.app.get('/', (req, res) => {
    res.json({ message: "Hello from server!" });
});

router.app.post('/blog', (req, res) => {
    try {
        if(!req.body.title || !req.body.blogpost){
            return res.status(400).send({
                message: "send all required fields: title and blogpost",
            });
        }

        const data = {
            title: req.body.title,
            blogContent: req.body.blogpost,
            datePosted: new Date().toDateString()
        };

        const newBlog = Blog.create(data);
        
        return res.status(201).send(newBlog);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

router.app.get('/blogs', async (req, res) =>{
    try {
        const blogs = await Blog.find({});

        return res.status(200).json({
            count: blogs.length,
            data: blogs});
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

export default router;