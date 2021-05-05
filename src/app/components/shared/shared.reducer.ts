import { createReducer, on } from '@ngrx/store';
import { setErrorMessage, startLoading, stopLoading } from './shared.action';
import { initialState } from './shared.state';

const _sharedReducer = createReducer(
  initialState,
  on(startLoading, (state) => {
    return { ...state, isLoading: true };
  }),
  on(stopLoading, (state) => {
    return { ...state, isLoading: false };
  }),
  on(setErrorMessage,(state,action)=>{return { ...state, errorMessage:action.errorMessage};})
);

export function sharedReducer(state, action) {
  return _sharedReducer(state, action);
}
