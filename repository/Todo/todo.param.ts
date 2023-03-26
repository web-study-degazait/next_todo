export interface CreateTodoParam {
  title: string;
  content: string;
}

export interface GetTodoByIdParam {
  id: string;
}

export interface UpdateTodoByIdParam {
  id: string;
  title: string;
  content: string;
}

export interface DeleteTodoByIdParam {
  id: string;
}
