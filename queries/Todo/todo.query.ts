import { useMutation, useQuery } from "react-query";
import {
  CreateTodoParam,
  DeleteTodoByIdParam,
  GetTodoByIdParam,
  UpdateTodoByIdParam,
} from "../../repository/Todo/todo.param";
import todoRepository from "../../repository/Todo/todo.repository";

export const useGetTodosQuery = () =>
  useQuery("todos/useGetTodos", () => todoRepository.getTodos());

export const useGetTodoByIdQuery = ({ id }: GetTodoByIdParam) =>
  useQuery("todo/useGetTodoById", () => todoRepository.getTodoById({ id }));

export const useCreateTodoQuery = () => {
  const mutation = useMutation(({ title, content }: CreateTodoParam) => {
    return todoRepository.createTodo({ title, content });
  });
  return mutation;
};

export const useUpdateTodoQuery = () => {
  const mutation = useMutation(
    ({ id, title, content }: UpdateTodoByIdParam) => {
      return todoRepository.updateTodo({ id, title, content });
    }
  );
  return mutation;
};

export const useDeleteTodoQuery = () => {
  const mutation = useMutation(({ id }: DeleteTodoByIdParam) => {
    return todoRepository.deleteTodo({ id });
  });
  return mutation;
};
