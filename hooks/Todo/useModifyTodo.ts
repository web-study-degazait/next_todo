import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useQueryClient } from "react-query";
import { useUpdateTodoQuery } from "../../queries/Todo/todo.query";

interface Props {
  title: string | undefined;
  content: string | undefined;
  id: string;
  setIsModify: Dispatch<SetStateAction<boolean>>;
}

const useModifyTodo = ({ title, content, id, setIsModify }: Props) => {
  const [todoData, setTodoData] = useState({ title: "", content: "" });

  const queryClient = useQueryClient();

  const updateTodoMutation = useUpdateTodoQuery();

  const onModifyTodo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setTodoData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (title && content) {
      setTodoData({ title, content });
    }
  }, [title, content]);

  const onSubmit = () => {
    const { title, content } = todoData;
    updateTodoMutation.mutateAsync(
      {
        id,
        title,
        content,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries("todo/useGetTodoById");
          window.alert("수정되었습니다");
        },
      }
    );
  };

  return { todoData, setIsModify, onModifyTodo, onSubmit };
};

export default useModifyTodo;
