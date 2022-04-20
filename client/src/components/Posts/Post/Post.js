import React from 'react'
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faThumbsUp, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './Post.css';

function Post({ post, setCurrentId }) {
    const totalTime = post.prepTime + post.cookTime;
    return (
        <div className='post__card'>
            <img className='post__cardImg' src={post.imgURL} alt='recipe pic' />
            <hr className='post__cardLine' />
            <div className='post__titleContainer'>
                <p className='post__type'>{post.type}</p>
                <p className='post__title'>{post.title}</p>
                <p className='post__tags'>{post.tags.map((tag) => `#${tag} `)}</p>
                {/* <p>{moment(post.createAt).fromNow()}</p> */}
            </div>
            <div className='post__expand'>
                <button className='post__expandBtn' onClick={() => setCurrentId(post._id)}><FontAwesomeIcon className='post__expandBtnIcon' size='xl' icon={faEllipsis} /></button>
                {/* <FontAwesomeIcon size='xl' icon={faEllipsis} /> */}
            </div>
            <div className='post__info'>
                <p className='post__time'>
                    <span className='post__time--number'>{totalTime}</span>
                    <span>Times Needed(mins)</span>
                </p>
                <p className='post__serving'>
                    <span className='post__serving--number'>{post.servings}</span>
                    <span>Serving(s)</span>
                </p>
            </div>
            <div className='post__bot'>
                <button className='post__like'>
                    <FontAwesomeIcon className='post__likeBtn' icon={faThumbsUp} />
                    <span>Like</span>
                    {post.likeCount}
                </button>
                <button className='post__delete'>
                    <FontAwesomeIcon className='post__deleteBtn' icon={faTrashCan} />
                    <span>Delete</span>
                </button>
            </div>
        </div>
    )
}

export default Post