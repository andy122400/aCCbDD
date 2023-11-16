export interface FrListModel{
    id: number
    name: string
    category: string
    description: string
    status: number
    create_date: string
    create_by: string
    update_date: string
    update_by: string
    state_void: number
}

export interface CustomFrListModel{
    ID: number
    Name: string
    Category: string
    Description: string
    Status: string
    createDate: string
    createBy: string
    updateDate: string
    updateBy: string
    stateVoid: number
}

export interface IFrListRequest {
    match_if: string;
    field_type: string;
    content: string
}

export interface IFrListCreateRequest {
    name: string;
    category: string;
    description: string;
    status: number;
}