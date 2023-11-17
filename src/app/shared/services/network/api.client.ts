import axios, {AxiosError} from "axios";
import {AxiosRequestConfig,} from "axios";
import BaseResponse from "./models/BaseResponse";
import {errorLogger, requestLogger, responseLogger} from "./interceptors/logger";
import {inject, Injectable} from "@angular/core";
import {AuthService} from "../auth.service";
import UserModel from "../../models/user.model";

@Injectable({
  providedIn: "root"
})
export default class ApiClient {
  private authService = inject(AuthService)

  private axiosClient = axios.create({
    baseURL: "http://10.150.32.58:8083",
    responseType: "json",
    timeout: 60000,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    }
  })

  constructor() {
    this.setLoggerAxios()
    // handle token 401

    this.authService.user$.subscribe((user) => {
      this.handleUnauthorized(user, this.authService.logout)
    })
  }

  private setLoggerAxios() {
    this.axiosClient.interceptors.request.use(requestLogger, errorLogger);
    this.axiosClient.interceptors.response.use(responseLogger, errorLogger);
  }

  private handleUnauthorized(user: UserModel|undefined, onUnauthorized: () => void) {
    this.axiosClient.interceptors.request.use(
      config => {
        config.headers["Authorization"] = `Bearer ${user?.access_token}`
        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );

    this.axiosClient.interceptors.response.use(
      config => {
        return config;
      },
      error => {
        if (error.isAxiosError) {
          if (error.response?.code === 401) {
            onUnauthorized();
          }
        } else {
          console.error("Not axios error", error);
        }
        return Promise.reject(error);
      },
    );
  }

  async request<T, Data>(config: AxiosRequestConfig<Data>): Promise<BaseResponse<T>> {
    try {
      return (await this.axiosClient.request<BaseResponse<T>>(config)).data
    } catch (e) {
      if (e instanceof AxiosError) {
        return {
          code: e.response?.data?.code || 600,
          message: e.message
        }
      }

      return {
        code: 600,
        message: 'An error occurred'
      }
    }
  }

  post<T, Data = any>(url: string, data?: Data, config?: AxiosRequestConfig<Data>): Promise<BaseResponse<T>> {
    return this.request({
      ...config,
      url,
      data,
      method: "POST"
    })
  }

  get<T>(url: string, config?: AxiosRequestConfig): Promise<BaseResponse<T>> {
    return this.request({
      ...config,
      url,
      method: "GET"
    })
  }

  delete<T, Data = any>(url: string, config?: AxiosRequestConfig<Data>): Promise<BaseResponse<T>> {
    return this.request({
      ...config,
      url,
      method: "DELETE"
    })
  }

  put<T, Data = any>(url: string, data?: Data, config?: AxiosRequestConfig<Data>): Promise<BaseResponse<T>> {
    return this.request({
      ...config,
      url,
      data,
      method: "PUT"
    })
  }
}
