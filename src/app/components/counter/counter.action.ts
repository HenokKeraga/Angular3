import { createAction, props } from "@ngrx/store";


export const increment = createAction('INCREMENT');
export const deceremnt = createAction('DECREMENT');
export const reset = createAction('RESET');
export const custom = createAction('custom', props<{ customValue: number }>());