import React from "react";
import usePostTodo from "../../../hooks/Todo/usePostTodo";
import {
  WriteContainer,
  WriteInput,
  WriteInputContainer,
  WriteSubmitBtn,
  WriteText,
} from "./style";

interface Props {
  onClose: () => void;
}

const WriteTodo = ({ onClose }: Props) => {
  const { onChangeTodoData, onSubmitTodoData, todoData } = usePostTodo({
    onClose,
  });
  return (
    <WriteContainer
      onSubmit={onSubmitTodoData}
      onClick={(e) => e.stopPropagation()}
    >
      <WriteInputContainer>
        <WriteText>제목</WriteText>
        <WriteInput
          value={todoData.title}
          name="title"
          onChange={onChangeTodoData}
        />
      </WriteInputContainer>
      <WriteInputContainer>
        <WriteText>내용</WriteText>
        <WriteInput
          value={todoData.content}
          name="content"
          onChange={onChangeTodoData}
        />
      </WriteInputContainer>
      <WriteSubmitBtn type="submit">작성하기</WriteSubmitBtn>
    </WriteContainer>
  );
};

export default WriteTodo;
