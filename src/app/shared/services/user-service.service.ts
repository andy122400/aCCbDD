import { Injectable } from '@angular/core';
import { BaseService } from './base-service.service';

@Injectable({
    providedIn: 'root',
})
export class UserService extends BaseService {
    handleLogin(options: any) {
        try {
            return this.callApi<any>(options)
                .then((res) => res.data as any)
                .then((data) => data);
        } catch (error) {
            console.error(error);
            return error;
        }
    }
}
