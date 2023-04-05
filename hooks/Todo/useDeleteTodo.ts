import React from "react";
import { useQueryClient } from "react-query";
import { useDeleteTodoQuery } from "../../queries/Todo/todo.query";
import { DeleteTodoByIdParam } from "../../repository/Todo/todo.param";

const useDeleteTodo = ({ id }: DeleteTodoByIdParam) => {
  const queryClient = useQueryClient();

  const deleteTodoMutation = useDeleteTodoQuery();

  const deleteTodo = () => {
    deleteTodoMutation.mutateAsync(
      {
        id,
      },
      {
        onSuccess: () => {
          window.alert("게시물이 삭제되었습니다");
          queryClient.invalidateQueries("todos/useGetTodos");
        },
        onError(error) {
          window.alert(error);
        },
      }
    );
  };
  return { deleteTodo };
};

export default useDeleteTodo;
