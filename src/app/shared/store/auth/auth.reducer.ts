import { createReducer, on } from '@ngrx/store';
import { signIn, signOut, updateUser } from './auth.action';
import UserModel from '../../models/user.model';

export const authReducers = createReducer<UserModel|undefined>(
  undefined,
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
