import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { ACCESS_TOKEN_KEY } from "../../../constants/token.constant";
import token from "../../../lib/token";
import { useSignupMutation } from "../../../queries/Auth/auth.query";
import { PostSignupParam } from "../../../repository/Auth/auth.param";
import {
  AuthBottomTextWrap,
  AuthBottomWrap,
  AuthContainer,
  AuthInput,
  AuthParamText,
  AuthPath,
  AuthPathText,
  AuthSubmitButton,
  AuthTitle,
  AuthWrap,
} from "./style";

const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<PostSignupParam>();
  const postSignupMutation = useSignupMutation();
  const router = useRouter();
  return (
    <AuthContainer>
      <form
        onSubmit={handleSubmit(({ email, password }) =>
          postSignupMutation.mutateAsync(
            {
              email,
              password,
            },
            {
              onSuccess: ({ token: accessToken }) => {
                token.setToken(ACCESS_TOKEN_KEY, accessToken);
              },
            }
          )
        )}
      >
        <AuthWrap>
          <AuthTitle>회원가입</AuthTitle>
          <AuthBottomWrap>
            <AuthParamText>Email</AuthParamText>
            <AuthInput
              type="email"
              {...register("email", {
                required: "이메일 입력은 필수입니다.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "이메일 형식에 맞지 않습니다.",
                },
              })}
              placeholder="이메일을 입력해주세요"
            />
            <AuthParamText>Password</AuthParamText>
            <AuthInput
              type="password"
              {...register("password", {
                required: "비밀번호 입력은 필수입니다.",
                minLength: {
                  value: 8,
                  message: "8자리 이상 비밀번호를 사용하세요.",
                },
              })}
              placeholder="비밀번호를 입력해주세요"
            />
            <AuthSubmitButton type="submit">회원가입</AuthSubmitButton>
            <AuthPathText>
              이미 계정이 있으신가요?{" "}
              <strong onClick={() => router.push("/auth/login")}>로그인</strong>
            </AuthPathText>
          </AuthBottomWrap>
        </AuthWrap>
      </form>
    </AuthContainer>
  );
};

export default Auth;
