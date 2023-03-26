import { useRouter } from "next/router";
import { Todo } from "../../../types/Todo/todo.type";
import {
  TodoItemBox,
  TodoItemCheckBox,
  TodoItemContainer,
  TodoItemDelBtn,
  TodoItemTitle,
} from "./stlye";
import { FiTrash2 } from "react-icons/fi";
interface Props {
  data: Todo;
}

const TodoItem = ({ data }: Props) => {
  const router = useRouter();

  return (
    <>
      <TodoItemContainer>
        <FiTrash2 />
        <TodoItemCheckBox type="checkbox" />
        <TodoItemTitle>{data.title}</TodoItemTitle>
      </TodoItemContainer>
    </>
  );
};

export default TodoItem;
