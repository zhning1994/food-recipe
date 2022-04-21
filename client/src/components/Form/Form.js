import React, { useState, useEffect } from 'react';
import burger from '../../assets/form-burgerIcon.png';
import FileBase64 from 'react-file-base64';
import './Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faAppleWhole } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts.js';

function Form({ currentId, setCurrentId }) {
    const post = useSelector((state) => currentId.id !== 0 ? state.posts.find((p) => p._id === currentId.id) : null);
    const dispatch = useDispatch();
    const [postData, setPostData] = useState({
        creator: '', title: '', type: '', description: '', tags: '', prepTime: 1, cookTime: 1, serving: 1, ingredients: [], method: '', imgURL: ''
    });
    const [ingredientVal, setIngredientVal] = useState('0');

    useEffect(() => {
        if (post) setPostData((prevState) => ({ ...prevState, ...post }));
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId.id !== 0) {
            dispatch(updatePost(currentId.id, postData));
            clear();
        } else {
            dispatch(createPost(postData));
            clear();
        }
    };

    const clear = () => {
        setCurrentId((prevState) => ({ ...prevState, id: 0 }))
        setPostData({
            creator: '', title: '', type: '', description: '', tags: '', prepTime: 1, cookTime: 1, serving: 1, ingredients: [], method: '', imgURL: ''
        })
    }

    const addIngredientHandler = () => {
        if (ingredientVal.length === 0) return;
        setPostData(postData => ({ ...postData, ingredients: postData.ingredients.concat(ingredientVal) }));
        setIngredientVal('');
    };

    const removeIngredientHandler = (itemRemove) => (setPostData(postData => ({ ...postData, ingredients: postData.ingredients.filter((item) => item !== itemRemove) })))



    return (
        <div className='outlook'>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form__header'>
                    <img className='form__headerImg' src={burger} alt='burger-icon' />
                    <h3 className='form__formTitle'>Let's share yours recipe with us!</h3>
                </div>
                <hr className='form__divideLine' />
                <label className='form__creator'>
                    <span>Name</span>
                    <input value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} placeholder='Zhen Ning' type='text' name='creator' />
                </label>
                <label className='form__title'>
                    <span>Dish Name</span>
                    <input value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} placeholder='Aglio Olio' type='text' name='title' />
                </label>
                <label className='form__type'>
                    <span>Type</span>
                    <input value={postData.type} onChange={(e) => setPostData({ ...postData, type: e.target.value })} placeholder='ITALIAN SPICY PASTA' type='text' name='type' />
                </label>
                <label className='form__tags'>
                    <span>Hashtags</span>
                    <input value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} placeholder='italian,spicy...' type='text' name='tags' />
                </label>
                <label className='form__description'>
                    <span>Description</span>
                    <textarea value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })} placeholder='Some briefly description of this dish.' rows={8} name='description' />
                </label>
                <div className='form__timeAndServing'>
                    <label className='form__time--prepTime'>
                        <span>Prepare Time (mins)</span>
                        <input value={postData.prepTime} onChange={(e) => setPostData({ ...postData, prepTime: e.target.value })} type='number' name='prepTime' />
                    </label>
                    <label className='form__time--cookTime'>
                        <span>Cook Time (mins)</span>
                        <input value={postData.cookTime} onChange={(e) => setPostData({ ...postData, cookTime: e.target.value })} type='number' name='cookTime' />
                    </label>
                    <label className='form__serving'>
                        <span>Serving(s)</span>
                        <input value={postData.serving} onChange={(e) => setPostData({ ...postData, serving: e.target.value })} type='number' name='servings' />
                    </label>
                </div>
                <label className='form__ingredient'>
                    <span>Ingredients</span>
                    <div className='form__ingredientBox'>
                        <input value={ingredientVal} onChange={(e) => setIngredientVal(e.target.value)} placeholder='Key in your ingredient one by one at here and click insert button besides. Click the ingredient item below if you want to delete it.' type='text' name='ingredients' />
                        <FontAwesomeIcon className='form__addIcon' size='xl' onClick={addIngredientHandler} icon={faPlus} />
                    </div>
                    {postData.ingredients.length ? <ul name='ingredients' className='form__ingredientList'>
                        {postData.ingredients.map((ing) => {
                            let newId = uuidv4();
                            return (<li onClick={() => removeIngredientHandler(ing)
                            } key={newId}><FontAwesomeIcon className='form__ingredientIcon' icon={faAppleWhole
                            } />{ing}</li>)
                        })}
                    </ul> : null}
                </label>
                <label className='form__methods'>
                    <span>Methods</span>
                    <textarea value={postData.method} onChange={(e) => setPostData({ ...postData, method: e.target.value })} placeholder='Show us some steps how to make this.' rows={8} name='methods' />
                </label>
                {/* <label className='form__img'>
                    <span>Food Pics</span>
                    <input type='file' name='imgURL' />
                </label> */}
                <div className='form__pics'>
                    <span>Dish Pics</span>
                    <FileBase64 type='file' multiple={false} onDone={({ base64 }) => setPostData({ ...postData, imgURL: base64 })} />
                </div>
                <div className='form__btn'>
                    <button className='form__submitBtn' type='submit'>{currentId.id !== 0 ? <span>Submit</span> : <span>Create</span>}</button>
                    <button className='form__clearBtn' onClick={clear}><span>Clear</span></button>
                </div>
            </form>
        </div>
    )
}

export default Form;