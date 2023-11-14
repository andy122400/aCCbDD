import {Component, inject, OnChanges, OnDestroy, OnInit, SimpleChanges} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import ApiService from "../../services/api.service";
@Component({
  template: ''
})
export default abstract class BaseComponent implements OnInit, OnChanges, OnDestroy {
  protected apiService = inject(ApiService)

  private _loading$ = new BehaviorSubject<boolean>(false);
  public loading$: Observable<boolean> = this._loading$;

  public showLoading(isLoading: boolean) {
    this._loading$.next(isLoading)
  }

  public showError(error: any) {
    // todo: implement show error handler
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnDestroy(): void {

  }

  ngOnInit(): void {
  }
}
