import { useRouter } from "next/router";
import React, { useState } from "react";
import useModifyTodo from "../../../../hooks/Todo/useModifyTodo";
import { useGetTodoByIdQuery } from "../../../../queries/Todo/todo.query";
import { ModalBackground } from "../../../Common/Modal/style";
import {
  WriteContainer,
  WriteInputContainer,
  WriteText,
} from "../../../Common/Write/style";
import { DetailModifyBtn, DetailTextContainer, DetailTextInput } from "./style";

interface Props {
  id: string;
}

const HomeTodoDetail = ({ id }: Props) => {
  const router = useRouter();
  const { data } = useGetTodoByIdQuery({ id });
  const [isModify, setIsModify] = useState(false);

  const { todoData, onModifyTodo, onSubmit } = useModifyTodo({
    content: data?.data.content,
    title: data?.data.title,
    id,
    setIsModify,
  });
  return (
    <ModalBackground onClick={() => router.push("/")}>
      <WriteContainer onClick={(e) => e.stopPropagation()}>
        {isModify ? (
          <>
            <WriteInputContainer>
              <WriteText>제목</WriteText>
              <DetailTextInput
                name="title"
                value={todoData.title}
                onChange={onModifyTodo}
              />
            </WriteInputContainer>
            <WriteInputContainer>
              <WriteText>제목</WriteText>
              <DetailTextInput
                name="content"
                value={todoData.content}
                onChange={onModifyTodo}
              />
            </WriteInputContainer>
            <DetailModifyBtn
              onClick={() => {
                onSubmit();
                setIsModify((prev) => !prev);
              }}
            >
              확인
            </DetailModifyBtn>
          </>
        ) : (
          <>
            <WriteInputContainer>
              <WriteText>제목</WriteText>
              <DetailTextContainer>{data?.data.title}</DetailTextContainer>
            </WriteInputContainer>
            <WriteInputContainer>
              <WriteText>내용</WriteText>
              <DetailTextContainer>{data?.data.content}</DetailTextContainer>
            </WriteInputContainer>
            <DetailModifyBtn
              onClick={() => {
                setIsModify((prev) => !prev);
              }}
            >
              수정
            </DetailModifyBtn>
          </>
        )}
      </WriteContainer>
    </ModalBackground>
  );
};

export default HomeTodoDetail;
