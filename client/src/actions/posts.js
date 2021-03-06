import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes.js';
import * as api from '../api/axios.js';

export const getPosts = () => async (dispatch, getState) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch, getState) => {
    try {
        const { data } = await api.createPost(post);
        console.log(data);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, post) => async (dispatch, getState) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: UPDATE, payload: data });
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) => async (dispatch, getState) => {
    try {
        await api.deletePost(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch, getState) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({ type: LIKE, payload: data });

    } catch (error) {
        console.log(error);
    }
}