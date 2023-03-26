import axios from "axios";
import { SERVER } from "../../config/config.json";
import { ACCESS_TOKEN_KEY, REQUEST_KEY } from "../../constants/token.constant";

import token from "../token";

export const customAxios = axios.create({
  baseURL: SERVER,
  headers: {
    [REQUEST_KEY]: token.getToken(ACCESS_TOKEN_KEY),
  },
});
