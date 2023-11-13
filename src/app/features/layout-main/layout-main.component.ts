import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { InitGlobalState } from 'src/app/shared/store/global/global.reducer';

@Component({
    selector: 'app-layout-main',
    templateUrl: './layout-main.component.html',
    styleUrls: ['./layout-main.component.scss']
})
export class LayoutMainComponent {

    globalStore$: Observable<InitGlobalState>;

    currentScreen: string;

    constructor( private store: Store){
      this.globalStore$ = store.select((state: any) => state.global);
      this.globalStore$.subscribe(stores => {
        this.currentScreen = stores.isScreen;
      })
    }

    ngOnInit() {
    }

}

