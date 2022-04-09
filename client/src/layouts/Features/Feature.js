import React from 'react';
import './Feature.css';

function Feature() {
    return (
        <div>
            <div className='feature'>
                <div className='feature__sloganContainer'>
                    <h3 className='feature__slogan'><span>Share</span> Your Most Favourite Food Recipe At Here &amp; Let's <span>Cook</span></h3>
                    <p className='feature__detail'>Cost of living drastically increasing nowsaday but this shouldn't stop us for having healthy and fresh meals. Let's us make cheap and nice food ourselves. Share your favourite recipe at here, let us enjoy wonderful and cheap dishes.</p>
                </div>
                <div className='feature_btnContainer'>
                    <div className='feature_btnSubContainer'>
                        <button className='feature__btn'><span>View Recipe</span> <img src="https://img.icons8.com/stickers/100/000000/lemonade.png" alt='iconPic' /></button>
                        <button className='feature__btn'><span>Create Recipe</span><img src="https://img.icons8.com/stickers/100/000000/grapes.png" alt='iconPic' /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature