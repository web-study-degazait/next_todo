import { useRouter } from "next/router";
import token from "../../lib/token";

const useLogout = () => {
  const router = useRouter();
  const onLogout = () => {
    token.clearToken();
    router.push("/auth/login");
  };

  return { onLogout };
};

export default useLogout;
