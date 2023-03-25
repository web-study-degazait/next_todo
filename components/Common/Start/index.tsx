import { useRouter } from "next/router";
import React from "react";
import {
  StartButton,
  StartContainer,
  StartText,
  StartTitle,
  StartTopWrap,
} from "./style";

const Start = () => {
  const router = useRouter();
  return (
    <>
      <StartContainer>
        <StartTopWrap>
          <StartTitle>Todo List</StartTitle>
          <StartText>다들 열심히 살아봅시다. 제가 응원합니다</StartText>
        </StartTopWrap>
        <StartButton onClick={() => router.push("/auth/signup")}>
          Lets Start
        </StartButton>
      </StartContainer>
    </>
  );
};

export default Start;
