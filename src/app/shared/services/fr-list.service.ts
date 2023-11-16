import {inject, Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import { FrListModel, IFrListCreateRequest, IFrListRequest } from "./network/models/frlist.model";
import ApiClient from "./network/api.client";

@Injectable({
  providedIn: 'root',
})
export class FrListService {

  private axiosClient = inject(ApiClient);

  private _user$ = new BehaviorSubject<FrListModel | undefined>(undefined)
  public user$: Observable<FrListModel | undefined> = this._user$;

  constructor(private router: Router, private store: Store) {
  
  }

  getFrList(request: IFrListRequest) {
    const res = this.axiosClient.post<FrListModel[]>("/fr-lists/list",  request)
    return res
  }

  saveItemFrList(request: IFrListCreateRequest) {
    const res = this.axiosClient.post<FrListModel[]>("/fr-lists/add", request)
    return res
  }
}
