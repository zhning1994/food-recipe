import React from 'react';
import Post from './Post/Post.js';
import { useSelector } from 'react-redux';

function Posts() {
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    return (
        <div>
            {posts.map((post => (
                <div key={post._id}>
                    <Post post={post} />
                </div>
            )))}
        </div>
    )
}

export default Posts