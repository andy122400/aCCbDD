import UserModel from "../../../models/user.model";

export interface LoginModelRequest {
  user_name: string,
  password: string,
  company: string,
}


export type LoginModelResponse = UserModel
