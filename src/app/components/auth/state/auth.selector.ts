import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthState} from './auth.state';

export const AUTH_STATE = 'auth';

export const getAuthState = createFeatureSelector<AuthState>(AUTH_STATE);
export const getUser = createSelector(getAuthState, state => state.user);
export const getIsAuthencated = createSelector(getAuthState, (state) => !!state.user);
export const getTokenString = createSelector(getAuthState, state => {
  return state.user ? state.user.userToken : null;
});
