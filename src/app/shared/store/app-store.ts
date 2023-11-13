import { StoreModule } from '@ngrx/store';
import { authReducers } from './auth/auth.reducer';
import { globalReducer } from './global/global.reducer';


const AppStore = StoreModule.forRoot({
    auth: authReducers,
    global: globalReducer
 })

export default AppStore
