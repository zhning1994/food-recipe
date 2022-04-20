import React from 'react';
import Post from './Post/Post.js';
import { useSelector } from 'react-redux';
import './Posts.css';

function Posts({ setCurrentId }) {
    const posts = useSelector((state) => state.posts);
    return (
        <>
            <h3 className='posts__recipeHead'>Don't Miss Out This Hot Recipe Hits</h3>
            <div className='post__cardContainer'>
                {posts.map((post => (
                    <div key={post._id}>
                        <Post setCurrentId={setCurrentId} post={post} />
                    </div>
                )))}
            </div>
        </>

    )
}

export default Posts