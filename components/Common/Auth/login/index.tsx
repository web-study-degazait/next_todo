import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { ACCESS_TOKEN_KEY } from "../../../../constants/token.constant";
import token from "../../../../lib/token";
import { usePostLoginMutation } from "../../../../queries/Auth/auth.query";
import { PostLoginParam } from "../../../../repository/Auth/auth.param";
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
} from "../style";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<PostLoginParam>();
  const postLoginMutation = usePostLoginMutation();
  const router = useRouter();
  return (
    <AuthContainer>
      <form
        onSubmit={handleSubmit(({ email, password }) =>
          postLoginMutation.mutateAsync(
            {
              email,
              password,
            },
            {
              onSuccess: ({ token: accessToken }) => {
                token.setToken(ACCESS_TOKEN_KEY, accessToken);
                router.push("/");
              },
            }
          )
        )}
      >
        <AuthWrap>
          <AuthTitle>로그인</AuthTitle>
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
            <AuthSubmitButton type="submit">로그인</AuthSubmitButton>
            <AuthPathText>
              계정이 없다면 <strong>회원가입</strong>
            </AuthPathText>
          </AuthBottomWrap>
        </AuthWrap>
      </form>
    </AuthContainer>
  );
};

export default Login;
