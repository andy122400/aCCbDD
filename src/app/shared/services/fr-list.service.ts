import {inject, Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import { FrListModel, IFrListCreateRequest, IFrListRequest } from "./network/models/frlist.model";
import ApiClient from "./network/api.client";

@Injectable({
  providedIn: 'root',
})
export class FrListService {

  private axiosClient = inject(ApiClient);

  constructor(private router: Router, private store: Store) {
  
  }

  getFrList(request: IFrListRequest) {
    return this.axiosClient.post<FrListModel[]>("/fr-lists/list",  request);
  }

  saveItemFrList(request: IFrListCreateRequest) {
    return this.axiosClient.post<FrListModel>("/fr-lists/add", request)
  }

  updateItemFrList(request: any) {
    return this.axiosClient.post<FrListModel>(`/fr-lists/${request.id}/update`, request);
  }

  deleteItemFrList(id: number){
    return this.axiosClient.delete<any>(`/fr-lists/delete/${id}`);
  }

  getDetailItem(request : any) {
    return this.axiosClient.post<any>(`/fr-lists/${request.id}/detail`)
  }
  saveItemDetail(request: any) {
    return this.axiosClient.post<any>(`/fr-lists/${request.id}/detail/add`, request)
  }

  updateItemDetail(request: any) {
    return this.axiosClient.post<any>(`/fr-lists/${request.id}/${request.id}/update`, request)
  }

  deleteItemDetail(id: number){
    return this.axiosClient.delete<any>(`/fr-lists/delete/detail/${id}`);
  }

  parseFrListModel(data: FrListModel[]){
    if (!data.length) return []
    return data.map(item => this.parseFrListItem(item));
  }

  parseFrListItem(item: FrListModel) {
    if(!item) return null;
    return (
      {
        ID: item.id,
        Name: item.name,
        Description: item.description,
        Category: item.category,
        Status: item.status === 1 ? 'Active' : 'Inactive',
        createDate: item.create_date,
        updateDate: item.update_date,
        createBy: item.create_by,
        updateBy: item.update_by,
        stateVoid: item.state_void
      }
    )
  }
}
