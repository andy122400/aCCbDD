import {inject, Injectable} from "@angular/core";
import axios from "axios";
import {AuthService} from "./auth.service";
import {LoginModelRequest, LoginModelResponse} from "./network/models/login.model";
import BaseResponse from "./network/models/BaseResponse";
import {errorLogger, requestLogger, responseLogger} from "./network/interceptors/logger";

@Injectable({
  providedIn: "root"
})
export default class ApiService {
  private axiosClient = axios.create({
    baseURL: "http://10.150.32.110:8083/api",
    responseType: "json",
    timeout: 15000,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    }
  })

  private authService = inject(AuthService)

  constructor() {
    this.setLoggerAxios()
    // handle token 401
    this.handleUnauthorized(this.authService.logout)
  }

  login(request: LoginModelRequest) {
    return this.axiosClient.post<BaseResponse<LoginModelResponse>>("/accounts/login", request)
  }

  private setLoggerAxios() {
    this.axiosClient.interceptors.request.use(requestLogger, errorLogger);
    this.axiosClient.interceptors.response.use(responseLogger, errorLogger);
  }

  private handleUnauthorized(onUnauthorized: () => void) {
    this.axiosClient.interceptors.response.use(
      config => {
        return config;
      },
      error => {
        if (error.isAxiosError) {
          if (error.response.status === 401) {
            onUnauthorized();
          }
        } else {
          console.error(error);
        }
        return Promise.reject(error);
      },
    );
  }
}
