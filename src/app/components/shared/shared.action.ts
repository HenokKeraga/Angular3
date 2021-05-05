import { createAction, props } from "@ngrx/store"

export const START_LOADING='START LOADING'
export const STOP_LOADING='STOP LOADING'
export const ERROR_MESSGAE='[shared page] error message'

export const startLoading=createAction(START_LOADING)
export const stopLoading=createAction(STOP_LOADING)
export const setErrorMessage=createAction(ERROR_MESSGAE,props<{errorMessage:string}>())

