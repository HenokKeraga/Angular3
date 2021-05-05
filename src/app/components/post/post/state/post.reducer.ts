import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

import {addPostSuccess, loadPostSuccess, updatePost} from './post.action';
import {createEntityAdapter, EntityState, Update} from '@ngrx/entity';
import {routerState} from '../../../router/router.selector';
import {RouterStateUrl} from '../../../router/custom-route-serializer';

export interface Post {
  id: string | number;
  title: string;
  description: string;
}


export interface PostState extends EntityState<Post> {
}

export const postEntityAdapter = createEntityAdapter<Post>();

export const initialPostState: PostState = postEntityAdapter.getInitialState();

// tslint:disable-next-line:variable-name
const _postReducer = createReducer(
  initialPostState,
  on(addPostSuccess, (state, action) => {
    return postEntityAdapter.addOne(action.post, state);
  }),
  on(updatePost, (state, action) => {

    return postEntityAdapter.updateOne(action.post, state);

  }),
  on(loadPostSuccess, (state, action) => {
    return postEntityAdapter.setAll(action.posts, state);
  })
);

export const postReducer = (state, action) => {
  return _postReducer(state, action);
};

//  export function postReducer1(state, action) {
//      return _postReducer(state,action)
//  }

//
// export const getPostPerId = createSelector(
//   getPostsState,
//   (state: postState, {id}) => state.posts.find((post) => post.id === id)
// );

const postSelectors = postEntityAdapter.getSelectors();
const getPostsState = createFeatureSelector<PostState>('post');
export const getAllPosts = createSelector(
  getPostsState,
  postSelectors.selectAll
);
const getPostEntities = createSelector(getPostsState, postSelectors.selectEntities);
export const getPostPerId = createSelector(
  getPostEntities,
  routerState,
  (posts, route: RouterStateUrl) => {
    return posts ? posts[route.params.id] : null;
  }
);

