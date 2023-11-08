import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
// import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import {AppLayoutComponent} from "./shared/components/layout/app.layout.component";
import {LoginComponent} from "./features/login/login.component";
import {ErrorComponent} from "./features/error/error.component";
import {AccessComponent} from "./features/unauthorized/access.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                component: AppLayoutComponent,
            },
            {path: 'login', component: LoginComponent},
            {path: 'error', component: ErrorComponent},
            {path: 'unauthorized', component: AccessComponent},
            {path: '**', redirectTo: '/error'},
        ], {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload',})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
