import { useRouter } from "next/router";
import { Todo } from "../../../types/Todo/todo.type";
import {
  TodoItemContainer,
  TodoItemTitle,
  TodoItemCheckContainer,
} from "./stlye";
import { FiTrash2 } from "react-icons/fi";
import useDeleteTodo from "../../../hooks/Todo/useDeleteTodo";
import { useState } from "react";
import { MdCheckBox } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import HomeTodoDetail from "./HomeTodoDetail";
import useModal from "../../../hooks/Modal/useModal";

interface Props {
  data: Todo;
}

const TodoItem = ({ data }: Props) => {
  const router = useRouter();
  const { deleteTodo } = useDeleteTodo({ id: data.id });
  const [checked, setChecked] = useState(false);
  const detailModal = useModal();

  return (
    <>
      <TodoItemContainer>
        <FiTrash2 onClick={deleteTodo} />
        <TodoItemCheckContainer onClick={() => setChecked((prev) => !prev)}>
          {checked ? (
            <MdCheckBox />
          ) : (
            <MdCheckBoxOutlineBlank width={500} height={500} />
          )}
        </TodoItemCheckContainer>
        <TodoItemTitle
          checked={checked}
          onClick={() => router.push(`${data.id}`)}
        >
          {data.title}
        </TodoItemTitle>
      </TodoItemContainer>
    </>
  );
};

export default TodoItem;
