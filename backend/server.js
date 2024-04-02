import express  from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import {PORT, mongoURL} from './config.js';
import blogRoute from './routes/blogRoute.js'

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', blogRoute);

mongoose.connect(mongoURL).then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
        console.log(`Server is running on port 5000.`);
    });
}).catch((err) => {
    console.log(err);
});





