import React, { useState, useEffect } from "react";
import Header from '../../layouts/Header/Header.js';
import Feature from '../../layouts/Features/Feature.js';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts.js';
import Posts from '../../components/Posts/Posts.js';
import Form from '../../components/Form/Form.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import Form from './components/Form/Form.js';
//import Posts from './components/Posts/Posts.js';
//import { getPosts } from './actions/posts.js';
//import Feature from './layouts/Features/Feature';
//import Header from './layouts/Header/Header';


function Home() {
    const [currentId, setCurrentId] = useState({ id: 0 });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <div>
            <Header />
            <Feature />
            <Posts setCurrentId={setCurrentId} />
            <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
    )
}

export default Home