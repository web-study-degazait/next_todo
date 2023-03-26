import styled from "styled-components";

export const WriteContainer = styled.form`
  display: flex;
  flex-direction: column;

  width: 820px;
  height: 561px;

  color: #5e5e5e;
  background-color: #ebebeb;
  border-radius: 10px;

  row-gap: 38px;

  padding-top: 54px;
  padding-left: 80px;
`;

export const WriteText = styled.label`
  font-size: 24px;
`;

export const WriteInput = styled.input`
  width: 659px;
  height: 58px;

  background: #ffffff;
  border-radius: 10px;

  border: none;
  outline: none;

  padding-left: 38px;
  font-size: 18px;
  color: #aeaeae;
`;

export const WriteInputContainer = styled.div`
  width: 100%;
  gap: 9px;
  display: flex;
  flex-direction: column;
`;

export const WriteSubmitBtn = styled.button`
  width: 261px;
  height: 69px;

  margin-left: 200px;
  margin-top: 130px;

  background-color: #ffffff;
  border-radius: 10px;
  font-size: 18px;

  border: none;
  outline: none;
`;
