import { createAction, props } from '@ngrx/store';
import UserModel from '../../models/user.model';

export const signIn = createAction('[Auth] signIn', props<UserModel>());
export const signOut = createAction('[Auth] signOut');
export const updateUser = createAction('[Auth] updateUser', props<Partial<UserModel>>());
