import {inject, Injectable} from "@angular/core";
import {LoginModelRequest, LoginModelResponse} from "./network/models/login.model";
import ApiClient from "./network/api.client";

@Injectable({
  providedIn: "root"
})
export default class ApiService {
  private axiosClient = inject(ApiClient)

  login(request: LoginModelRequest) {
    return this.axiosClient.post<LoginModelResponse>("/accounts/login", request)
  }

  userList() {
    return this.axiosClient.get("/users/list")
  }
}
