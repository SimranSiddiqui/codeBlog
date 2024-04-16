import React, { useState } from 'react';
import axios from 'axios';


function EditBlog({ heading, post, submit }) {
  const [formData, setFormData] = useState({
    title: post ? post.title : '',
    blogpost: post ? post.content : ''
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        post ? `http://localhost:5000/${post.id}` : 'http://localhost:5000/new',
        formData
      );
      console.log(res.data); // You can handle the response data here
      window.location.href = '/';
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <h1>{heading}</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="blogpost"
          placeholder="Content"
          value={formData.blogpost}
          onChange={handleChange}
          rows="10"
          required
        ></textarea>
        <button className="full-width" type="submit">{submit}</button>
      </form>
    </div>
  );
}

export default EditBlog;
