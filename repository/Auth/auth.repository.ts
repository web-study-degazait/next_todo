import axios from "axios";
import { LoginResponse, SignupResponse } from "../../types/Auth/auth.type";
import { PostLoginParam, PostSignupParam } from "./auth.param";
import { SERVER } from "../../config/config.json";

class AuthRepository {
  public async postLogin({
    email,
    password,
  }: PostLoginParam): Promise<LoginResponse> {
    const { data } = await axios.post(`${SERVER}/users/login`, {
      email,
      password,
    });
    return data;
  }

  public async postSignup({
    email,
    password,
  }: PostSignupParam): Promise<SignupResponse> {
    const { data } = await axios.post(`${SERVER}/users/create`, {
      email,
      password,
    });
    return data;
  }
}

export default new AuthRepository();
