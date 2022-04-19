import React from 'react';
import Post from './Post/Post.js';
import { useSelector } from 'react-redux';
import './Posts.css';

function Posts() {
    const posts = useSelector((state) => state.posts);
    return (
        <div className='post__cardContainer'>
            <h3 className='posts__recipeHead'>Don't Miss Out This Hot Recipe Hits</h3>
            {posts.map((post => (
                <div key={post._id}>
                    <Post post={post} />
                </div>
            )))}
        </div>
    )
}

export default Posts