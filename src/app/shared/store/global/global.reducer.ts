import { createReducer, on } from '@ngrx/store';
import { changeScreen } from './global.actions';

export interface InitGlobalState {
    isScreen: string
}

const initialState: InitGlobalState | undefined = {
  isScreen: ''
};

export const globalReducer = createReducer(
    initialState,
    on(changeScreen, (state, payload) => {
      return {
        ...state,
        isScreen: payload.isScreen
    }
    }),
  );