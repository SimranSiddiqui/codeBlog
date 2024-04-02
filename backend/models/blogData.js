import {Blog} from "./blogModel.js"

const currentDate = new Date().toDateString();
const data = {
    title: 'Starting 100 days of Code',
    blogContent: 'Resumed working on my blog website. Also Gave Div3 contest at CF, solved 3 problems but the rating didnt increase much but who cares !!! hahahaha !!!',
    datePosted: currentDate
};

const newBlog = Blog.create(data);
console.log(newBlog);
