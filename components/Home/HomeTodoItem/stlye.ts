import styled, { css } from "styled-components";

export const TodoItemContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  row-gap: 17px;
  column-gap: 17px;
  margin-top: 30px;

  flex-wrap: wrap;
`;

export const TodoItemBox = styled.div`
  width: 100%;
  min-height: 56px;
  padding: 0px 20px;
  box-sizing: border-box;
  background-color: aliceblue;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 30px;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const TodoItemTitle = styled.p<{ checked: boolean }>`
  font-size: 20px;

  ${({ checked }) =>
    checked &&
    css`
      text-decoration: line-through;
    `}
`;

export const TodoItemDelBtn = styled.button`
  width: 76px;
  height: 42px;
  margin-left: 11px;
  border-radius: 10px;
  font-family: "Inter";
  font-size: 16px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  border: none;
  color: #ffffff;
  background: #6789ff;
  border-radius: 32px;
  margin-top: 38px;
  cursor: pointer;
`;

export const TodoItemCheckBox = styled.input`
  width: 200px;
  height: 200px;
`;

export const TodoItemCheckContainer = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
