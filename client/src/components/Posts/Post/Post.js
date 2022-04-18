import React from 'react'
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

function Post({ post }) {
    return (
        <div>
            <div>
                <p>{post.creator}</p>
                <p>{moment(post.createAt).fromNow()}</p>
            </div>
            <div>
                <button className='' onClick={() => { }}><FontAwesomeIcon size='xl' icon={faEllipsis} /></button>
            </div>
            <div>
                <p>{post.tags.map((tag) => `#${tag} `)}</p>
            </div>
            <div>
                <button><span>Like</span><FontAwesomeIcon icon={faThumbsUp} />{post.likeCount}</button>
                <button><span>Delete</span><FontAwesomeIcon icon={faThumbsUp} /></button>
            </div>
        </div>
    )
}

export default Post