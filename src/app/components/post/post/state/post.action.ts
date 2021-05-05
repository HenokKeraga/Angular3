import {createAction, props} from '@ngrx/store';
import {Post} from './post.reducer';
import {Update} from '@ngrx/entity';

export const ADD_POST = '[POST ] ADD POST';
export const ADD_POST_SUCCESS = '[POST] ADD POST SUCCESS';
export const UPDATE_POST = '[POST ] UPDATE POST';
export const LOAD_POST = '[POST] LOAD POST';
export const LOAD_POST_SUCCESS = '[POST] LOAD POST SUCCESS';


export const addPostData = createAction(ADD_POST, props<{ post: Post }>());
export const addPostSuccess = createAction(ADD_POST_SUCCESS , props<{ post: Post }>());
export const updatePost = createAction(UPDATE_POST, props<{ post: Update<Post> }>());
export const loadPost = createAction(LOAD_POST);
export const loadPostSuccess = createAction(LOAD_POST_SUCCESS, props<{ posts: Post[] }>());

