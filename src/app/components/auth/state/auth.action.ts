import {createAction, props} from '@ngrx/store';
import {User} from '../model/User.model';

export const LOGIN = '[LOG IN PAGE] LOGIN';
export const LOGIN_SUCCESS = '[LOG IN PAGE] LOGIN SUCESS';
export const LOGIN_FAILURE = '[LOG IN PAGE] LOGIN FAILURE';
export const SIGHUP_START = '[SING UP PAGE] SIGN UP START';
export const SIGHUP_SUCCESS = '[SIGN UP PAGE] SIGN UP SUCESS';
export const AUTO_LOGIN = '[AUTH PAGE] AUTO LOGIN';
export const AUTO_LOGOUT = '[AUTH PAGE] AUTO LOGOUT';

export const login = createAction(LOGIN, props<{ email: string, password: string }>());
export const loginSuccess = createAction(LOGIN_SUCCESS, props<{ user: User }>());
export const loginFailure = createAction(LOGIN_FAILURE);

// tslint:disable-next-line:variable-name
export const sighup_start = createAction(SIGHUP_START, props<{ email: string, password: string }>());
// tslint:disable-next-line:variable-name
export const sighup_success = createAction(SIGHUP_SUCCESS, props<{ user: User }>());
export const auto_login = createAction(AUTO_LOGIN);
export const auto_logout = createAction(AUTO_LOGOUT);
