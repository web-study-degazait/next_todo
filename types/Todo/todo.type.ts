export interface Todo {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface TodosResponse {
  data: Todo[];
}

export interface TodoResponse {
  data: Todo;
}
