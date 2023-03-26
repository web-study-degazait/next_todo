import { ACCESS_TOKEN_KEY } from "../../constants/token.constant";

class Token {
  public getToken(key: string) {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key);
    }
  }

  public setToken(key: string, token: string): void {
    localStorage.setItem(key, token);
  }

  public clearToken() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }
}

export default new Token();
