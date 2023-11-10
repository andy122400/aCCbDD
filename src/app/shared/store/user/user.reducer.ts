import { createReducer, on } from '@ngrx/store';
import { signIn, signOut, updateUser } from './user.action';
import UserModel from '../../models/user-model';

export const initialState: UserModel|undefined = undefined;

export const userReducers = createReducer(
  initialState,
  on(signIn, (_,  payload) => {
    return payload
  }),
  on(signOut, (_) => {
    return undefined
  }),
  on(updateUser, (state, payload) => {
    return  {
        ...state,
        ...payload
    }
  })
);