export interface MyInterface {
    id:string
    name: string;
    type: string;
    value: string;
}
// models Post {
//   id: number;
//   name: string;
//   type: string;
//   value: string;
// }

export interface ApiResponse {
  fr_status: string;
  posts: MyInterface[];
}

// export const jsonData: MyInterface[] = [
//   { "name": "表單單號", "type": "Text", "value": "ECN00878" },
//   { "name": "表單類型", "type": "inputbox", "value": "Andy plus" },
//   { "name": "申請人", "type": "inputbox", "value": "Ken_tai" },
//   { "name": "產地", "type": "inputbox", "value": "Accton" },
//   { "name": "OEM CODE", "type": "inputbox", "value": "09" },
//   { "name": "日期", "type": "Date", "value": "2023/10/10" }
// ];

