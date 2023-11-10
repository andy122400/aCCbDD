import { Action, createAction, props } from '@ngrx/store';

export const GetUser = 'User/Get';

export class GetUserAction implements Action {
    readonly type = GetUser;
    constructor(public payload: any) {}
}

export const getUser = createAction(GetUser, props<any>());
