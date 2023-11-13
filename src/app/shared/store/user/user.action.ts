import { createAction, props } from '@ngrx/store';
import UserModel from '../../models/user-model';

export const signIn = createAction('[User] signIn', props<UserModel>());
export const signOut = createAction('[User] signOut');
export const updateUser = createAction('[User] updateUser', props<Partial<UserModel>>());