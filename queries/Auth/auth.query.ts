import { useMutation } from "react-query";
import AuthRepository from "../../repository/Auth/auth.repository";
import {
  PostLoginParam,
  PostSignupParam,
} from "../../repository/Auth/auth.param";

export const usePostLoginMutation = () => {
  const mutation = useMutation(({ email, password }: PostLoginParam) => {
    return AuthRepository.postLogin({ email, password });
  });

  return mutation;
};

export const useSignupMutation = () => {
  const mutation = useMutation(({ email, password }: PostSignupParam) => {
    return AuthRepository.postSignup({ email, password });
  });
  return mutation;
};
