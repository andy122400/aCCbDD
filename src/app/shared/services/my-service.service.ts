import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyInterface } from '../models/my-interface';



@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private apiUrl = 'http://localhost:3000/'; // 請替換為你的 API URL

  constructor(private http: HttpClient) {}

  // 發送 GET 請求以獲取數據
  getData(): Observable<any> {
    // // const url = 'http://localhost:3000/posts';
    // const url = 'http://10.2.24.6:8080/FrGet';
    // const requestBody = new URLSearchParams();
    // requestBody.set('type', 'default');
    // // requestBody.set('key2', 'value2');
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // return this.http.post(url,requestBody,{headers});
    const url = 'http://10.2.24.6:8080/FrGet';

    // 创建 JSON 数据对象
    // const requestData = { type: 'default' };
    const requestData = { type: 'default' };


    // 将 JSON 数据转为字符串
    const requestBody = JSON.stringify(requestData);

    // 设置请求头，指定 Content-Type 为 JSON
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, requestBody, { headers });
  }


  saveData(A:MyInterface): Observable<any> {
    // // const url = 'http://localhost:3000/posts';
    // const url = 'http://10.2.24.6:8080/FrGet';
    // const requestBody = new URLSearchParams();
    // requestBody.set('type', 'default');
    // // requestBody.set('key2', 'value2');
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // return this.http.post(url,requestBody,{headers});
    const url = 'http://10.2.24.6:8080/FrSave';

    // 创建 JSON 数据对象
    // const requestData = { type: 'default' };
    const requestData = A;


    // 将 JSON 数据转为字符串
    // const requestBody = JSON.stringify(requestData);

    // 设置请求头，指定 Content-Type 为 JSON
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, requestData, { headers });
  }
  // users: User[]; // 假設 User 是一個 Interface，用於定義用戶數據結構

  // constructor(private userService: UserService) {}

  // ngOnInit(): void {
  //   this.userService.getUsers().subscribe((data: User[]) => {
  //     this.users = data; // 將服務返回的數據賦值給組件的屬性
  //   });
  // }
}
