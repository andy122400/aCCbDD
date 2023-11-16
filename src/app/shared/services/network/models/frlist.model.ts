export interface FrListModel{
    fr_list_id: number
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