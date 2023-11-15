import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { InitGlobalState } from 'src/app/shared/store/global/global.reducer';
import { RouterOutlet } from '@angular/router';
import { CriteriaComponent } from './data-settings/criteria/criteria.component';
import { AutoNumbersComponent } from './data-settings/auto-numbers/auto-numbers.component';
import { ProcessExtensionsComponent } from './data-settings/process-extensions/process-extensions.component';
import { ListsComponent } from './data-settings/lists/lists.component';
import { CharacterSetsComponent } from './data-settings/character-sets/character-sets.component';
import { ClassesComponent } from './data-settings/classes/classes.component';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
    selector: 'app-layout-main',
    templateUrl: './layout-main.component.html',
    styleUrls: ['./layout-main.component.scss'],
    standalone: true,
    imports: [NgSwitch, NgSwitchCase, ClassesComponent, CharacterSetsComponent, ListsComponent, ProcessExtensionsComponent, AutoNumbersComponent, CriteriaComponent, NgSwitchDefault, RouterOutlet]
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

