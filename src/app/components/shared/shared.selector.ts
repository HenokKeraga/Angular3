import { createFeatureSelector, createSelector } from "@ngrx/store"
import { SharedState } from './shared.state';

export const SHARED_STATE='shared'

export const getSharedState = createFeatureSelector<SharedState>(SHARED_STATE);
export const getLoadingStatus=createSelector(getSharedState,state=>state.isLoading)
export const getErrorMessage=createSelector(getSharedState,state=>state.errorMessage)