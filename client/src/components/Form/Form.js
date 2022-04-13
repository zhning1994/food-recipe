import React, { useState } from 'react';
import burger from '../../assets/form-burgerIcon.png';
import './Form.css';
function Form() {
    const [postData, setPostData] = useState({
        creator: '', title: '', type: '', description: '', tags: '', prepTime: 1, cookTime: 1, serving: 1, ingredient: [], method: '', imgURL: ''
    });
    return (
        <div className='outlook'>
            <form className='form'>
                <div className='form__header'>
                    <img className='form__headerImg' src={burger} alt='burger-icon' />
                    <h3 className='form__formTitle'>Let's share yours recipe with us!</h3>
                </div>
                <hr className='form__divideLine' />
                <label className='form__creator'>
                    <span>Name</span>
                    <input value={postData.creator} placeholder='Zhen Ning' type='text' name='creator' />
                </label>
                <label className='form__title'>
                    <span>Dish Name</span>
                    <input value={postData.title} placeholder='Aglio Olio' type='text' name='title' />
                </label>
                <label className='form__type'>
                    <span>Type</span>
                    <input placeholder='ITALIAN SPICY PASTA' type='text' name='type' />
                </label>
                <label className='form__description'>
                    <span>Description</span>
                    <textarea placeholder='Some briefly description of this dish.' rows={8} name='description' />
                </label>
                <div className='form__timeAndServing'>
                    <label className='form__time--prepTime'>
                        <span>Prepare Time (mins)</span>
                        <input type='number' defaultValue={1} name='prepTime' />
                    </label>
                    <label className='form__time--cookTime'>
                        <span>Cook Time (mins)</span>
                        <input className='' type='number' defaultValue={1} name='cookTime' />
                    </label>
                    <label className='form__serving'>
                        <span>Serving</span>
                        <input className='' type='number' defaultValue='1' name='serving' />
                    </label>
                </div>
                <label className='form__ingredient'>
                    <span>Ingredients</span>
                    <input placeholder='1/4 onions' type='text' name='ingredients' />
                </label>
                <label className='form__methods'>
                    <span>Methods</span>
                    <textarea placeholder='Show us some steps how to make this.' rows={8} name='methods' />
                </label>
                <label className='form__img'>
                    <span>Food Pics</span>
                    <input type='file' name='imgURL' />
                </label>
            </form>
        </div>
    )
}

export default Form;