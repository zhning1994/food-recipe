import React from 'react';
import Post from './Post/Post.js';
import { useSelector } from 'react-redux';

function Posts() {
    const posts = useSelector((state) => state.posts);
    return (
        <div>Posts</div>
    )
}

export default Posts