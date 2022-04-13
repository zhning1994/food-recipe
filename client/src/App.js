import './App.css';
import React, { useEffect } from "react";
import Header from './layouts/Header/Header';
import Feature from './layouts/Features/Feature';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts.js';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Feature />
      <Posts />
      <Form />
    </div>
  );
}

export default App;
