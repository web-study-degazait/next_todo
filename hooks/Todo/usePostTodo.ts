import { ChangeEvent, FormEvent, useState } from "react";
import { useQueryClient } from "react-query";
import { useCreateTodoQuery } from "../../queries/Todo/Todo.query";
import { CreateTodoParam } from "../../repository/Todo/todo.param";
import useModal from "../Modal/useModal";

interface Props {
  onClose: () => void;
}

const usePostTodo = ({ onClose }: Props) => {
  const queryClient = useQueryClient();

  const createTodoMutation = useCreateTodoQuery();

  const { close } = useModal();

  const [todoData, setTodoData] = useState<CreateTodoParam>({
    title: "",
    content: "",
  });

  const onChangeTodoData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodoData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitTodoData = async (e: FormEvent) => {
    e.preventDefault();
    const { title, content } = todoData;
    createTodoMutation.mutateAsync(
      {
        title,
        content,
      },
      {
        onSuccess: () => {
          setTodoData({ title: "", content: "" });
          onClose();
          queryClient.invalidateQueries("todos/useGetTodos");
        },
      }
    );
  };

  return { todoData, onChangeTodoData, onSubmitTodoData };
};
export default usePostTodo;
