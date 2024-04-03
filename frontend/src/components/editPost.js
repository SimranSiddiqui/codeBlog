import React from 'react';
import '../main.css';

function EditPost({ heading, post, submit }) {
  return (
    <div className="container">
      <h1>{heading}</h1>

      {post ? (
        <form id="editForm" method="post" action={`/new/${post.id}`}>
          <input type="text" name="title" defaultValue={post.title} />
          <textarea name="blogpost" rows="10" defaultValue={post.content}></textarea>
          <button className="full-width" type="submit">{submit}</button>
        </form>
      ) : (
        <form id="newPostForm" method="post" action="/new">
          <input type="text" name="title" placeholder="Title" required />
          <textarea name="blogpost" placeholder="Content" required rows="10"></textarea>
          <button className="full-width" type="submit">{submit}</button>
        </form>
      )}
    </div>
  );
}

export default EditPost;
