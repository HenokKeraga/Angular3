import { createReducer, on } from "@ngrx/store";
import { custom, deceremnt, increment, reset } from "./counter.action";


export interface CounterState {
  count: number;
}
const initialState: CounterState = {
  count: 0,
};



const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return { ...state, count: state.count + 1 };
  }),
  on(deceremnt, (state) => {
    return { ...state, count: state.count - 1 };
  }),
  on(reset, (state) => {
    return { ...state, count: 0 };
  }),
  on(custom, (state, { customValue }) => {
    return { ...state, count: state.count + +customValue };
  })
);
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}