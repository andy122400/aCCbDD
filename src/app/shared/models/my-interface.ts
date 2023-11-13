export interface MyInterface {
    id: string;
    name: string;
    type: string;
    value: string;
}

export interface ApiResponse {
    fr_status: string;
    posts: MyInterface[];
}