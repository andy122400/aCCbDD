import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { AxiosInstance } from 'axios';
import axios from 'axios';

interface ErrorResponse {
    id: string;
    code: string;
    message: string;
}

@Injectable({
    providedIn: 'root',
})
export class BaseService {
    // Define API
    apiURL = 'http://localhost:8080';
    private axiosClient: AxiosInstance;

    constructor(private http: HttpClient, private errorHandler: ErrorHandler) {
    }

    public async callApi<T>(options: any): Promise<T> {
        try {
            var axiosResponse = await this.axiosClient.request<T>({
                method: options.method,
                url: options.url,
                params: options?.params,
                data: options?.data,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: sessionStorage.getItem('token') || '',
                },
            });
            return axiosResponse.data;
        } catch (error) {
            console.error(error);
            return Promise.reject(this.normalizeError(error));
        }
    }
    private normalizeError(error: any): ErrorResponse {
        this.errorHandler.handleError(error);
        return {
            id: '-1',
            code: 'UnknownError',
            message: 'An unexpected error occurred.' + error,
        };
    }
}
