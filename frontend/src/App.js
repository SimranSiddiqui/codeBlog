import React from 'react';
import Home2 from './components/home2.js';
import EditPost from './components/editPost.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home2/>}
        />
        <Route
          path="/new"
          element={<EditPost submit = "Create New Post"
          heading = "New Post"/>}
        />
        <Route
          path="/edit"
          element={<EditPost submit = "Save Changes"
          heading = "Edit Post"/>}
        />
      </Routes>
    </Router>
  );
}

export default App;
