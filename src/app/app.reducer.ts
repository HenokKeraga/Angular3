import {ActionReducerMap, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {CounterState} from './components/counter/counter.reducer';
import {sharedReducer} from './components/shared/shared.reducer';
import {SharedState} from './components/shared/shared.state';
import {SHARED_STATE} from './components/shared/shared.selector';
import {AUTH_STATE} from './components/auth/state/auth.selector';
import {AuthState} from './components/auth/state/auth.state';
import {AuthReducer} from './components/auth/state/auth.reducer';
import {RouterReducerState, routerReducer} from '@ngrx/router-store';


export interface State {
  [SHARED_STATE]: SharedState;
  [AUTH_STATE]: AuthState;
  router: RouterReducerState;
}

export const appReducer: ActionReducerMap<State> = {
  [SHARED_STATE]: sharedReducer,
  [AUTH_STATE]: AuthReducer,
  router: routerReducer
};


export const getCountState = createFeatureSelector<CounterState>('counter');
export const getCounter = createSelector(getCountState, state => state.count);
