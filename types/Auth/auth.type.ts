import { Response } from "../Util/response.type";

export interface LoginResponse extends Response {
  token: string;
}

export interface SignupResponse extends Response {
  token: string;
}
