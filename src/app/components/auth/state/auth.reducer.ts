import {createReducer, on} from '@ngrx/store';
import {auto_logout, loginSuccess, sighup_success} from './auth.action';
import {initialState} from './auth.state';


// tslint:disable-next-line:variable-name
const _AuthReducer = createReducer(initialState, on(
  loginSuccess, (state, action) => {
    return {...state, user: action.user};
  }),
  on(sighup_success, (state, action) => {
    return {...state, user: action.user};
  }),
  on(auto_logout, state => {
    return {...state, user: null};
  })
);

export const AuthReducer = (action, state) => _AuthReducer(action, state);
