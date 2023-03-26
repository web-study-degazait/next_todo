import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import useModal from "../../../hooks/Modal/useModal";
import { useGetTodosQuery } from "../../../queries/Todo/Todo.query";
import { Todo, TodosResponse } from "../../../types/Todo/todo.type";
import Modal from "../../Common/Modal";
import WriteTodo from "../../Common/Write";
import TodoItem from "../HomeTodoItem";
import { HomeAddContainer, HomeTodoAddText, HomeWrap } from "../style";

const HomeTodoList = () => {
  const { close, isOpened, open } = useModal();
  const { data } = useGetTodosQuery();

  return (
    <HomeWrap>
      <HomeAddContainer onClick={open}>
        <IoIosAddCircle size={30} />{" "}
        <HomeTodoAddText>할 일을 입력하세요</HomeTodoAddText>
      </HomeAddContainer>
      <Modal isOpened={isOpened} onClose={close}>
        <WriteTodo onClose={close} />
      </Modal>
      {data?.data &&
        data?.data.map((data) => {
          return <TodoItem data={data} />;
        })}
    </HomeWrap>
  );
};

export default HomeTodoList;
