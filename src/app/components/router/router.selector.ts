import {createFeatureSelector, createSelector} from '@ngrx/store';
import {RouterReducerState} from '@ngrx/router-store';
import {RouterStateUrl} from './custom-route-serializer';

export const routerAllState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');
export const routerState = createSelector(routerAllState, router => router.state);
