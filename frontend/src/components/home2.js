import axios from "axios";
import React from 'react';
import '../main.css';

let res = await axios.get("http://localhost:5000/blogs");
console.log(res.data.data[0]);
let posts = res.data.data;

function handleDelete(){
  
}

function Home2() {
  return (
    <div className="container">
      <h1>CodeBlog</h1>
      <a id="newPostBtn" href="/new">New Post</a>
      <ul id="postsList">
          {posts.map(post => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <small>{post.datePosted}</small>
            <p>{post.blogContent}</p>
            <a className="edit" href="/edit">Edit</a>
            <a className="delete" href={`http://localhost:5000/${post.id}`}
            onClick={handleDelete}
            >Delete</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home2;