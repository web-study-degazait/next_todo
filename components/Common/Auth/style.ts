import styled from "styled-components";

export const AuthContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  background-color: #ebebeb;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthWrap = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 100px;
  padding-left: 104px;
  padding-top: 80px;

  width: 1288px;
  height: 733px;

  background-color: #ffffff;
  color: #414141;
`;

export const AuthTitle = styled.h1`
  font-size: 45px;
`;

export const AuthBottomWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 60px;
`;

export const AuthParamText = styled.label`
  font-size: 25px;
`;

export const AuthInput = styled.input`
  border: 0;
  outline: none;
  border-bottom: 1px solid black;

  width: 540px;
  font-size: 20px;
  height: 30px;
`;

export const AuthBottomTextWrap = styled.div`
  display: flex;
  column-gap: 15px;
`;

export const AuthPathText = styled.p``;

export const AuthPath = styled.p``;

export const AuthSubmitButton = styled.button`
  width: 100px;
  height: 30px;
`;
