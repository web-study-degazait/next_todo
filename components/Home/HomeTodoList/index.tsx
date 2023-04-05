import { useRouter } from "next/router";
import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import useModal from "../../../hooks/Modal/useModal";
import { useGetTodosQuery } from "../../../queries/Todo/todo.query";
import { Todo, TodosResponse } from "../../../types/Todo/todo.type";
import Modal from "../../Common/Modal";
import WriteTodo from "../../Common/Write";
import TodoItem from "../HomeTodoItem";
import { HomeAddContainer, HomeTodoAddText, HomeWrap } from "../style";

const HomeTodoList = () => {
  const addModal = useModal();
  const { data } = useGetTodosQuery();

  return (
    <HomeWrap>
      <HomeAddContainer onClick={addModal.open}>
        <IoIosAddCircle size={30} />
        <HomeTodoAddText>할 일을 입력하세요</HomeTodoAddText>
      </HomeAddContainer>
      <Modal isOpened={addModal.isOpened} onClose={addModal.close}>
        <WriteTodo onClose={addModal.close} />
      </Modal>
      {data?.data &&
        data?.data.map((data) => {
          return <TodoItem data={data} key={data.id} />;
        })}
    </HomeWrap>
  );
};

export default HomeTodoList;
