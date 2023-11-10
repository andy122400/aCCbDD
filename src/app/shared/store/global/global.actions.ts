import { createAction, props } from '@ngrx/store';
import { InitGlobalState } from './global.reducer';

export const changeScreen = createAction('[Global] Change Screen', props<{isScreen: string}>());