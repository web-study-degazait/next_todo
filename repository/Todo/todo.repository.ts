import { customAxios } from "../../lib/axios/customAxios";
import { TodoResponse, TodosResponse } from "../../types/Todo/todo.type";
import {
  CreateTodoParam,
  DeleteTodoByIdParam,
  GetTodoByIdParam,
  UpdateTodoByIdParam,
} from "./todo.param";

class TodoRepository {
  public async createTodo({ title, content }: CreateTodoParam): Promise<void> {
    await customAxios.post("/todos", { title, content });
  }

  public async getTodoById({ id }: GetTodoByIdParam): Promise<TodoResponse> {
    const { data } = await customAxios.get(`/todos/${id}`);
    return data;
  }

  public async getTodos(): Promise<TodosResponse> {
    const { data } = await customAxios.get(`/todos`);
    return data;
  }

  public async updateTodo({
    id,
    title,
    content,
  }: UpdateTodoByIdParam): Promise<void> {
    await customAxios.put(`/todos/${id}`, { title, content });
  }

  public async deleteTodo({ id }: DeleteTodoByIdParam): Promise<void> {
    await customAxios.delete(`/todos/${id}`);
  }
}

export default new TodoRepository();
