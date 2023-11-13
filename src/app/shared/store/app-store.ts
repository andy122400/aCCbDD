import { StoreModule } from '@ngrx/store';
import { userReducers } from './user/user.reducer';
import { globalReducer } from './global/global.reducer';


const AppStore = StoreModule.forRoot({ 
    user: userReducers,
    global: globalReducer
 })

export default AppStore
