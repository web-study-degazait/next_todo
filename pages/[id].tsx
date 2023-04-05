import { NextPage } from "next";
import React from "react";
import { dehydrate, QueryClient } from "react-query";
import Home from "../components/Home";
import { GetTodoByIdParam } from "../repository/Todo/todo.param";
import todoRepository from "../repository/Todo/todo.repository";

const Id: NextPage = () => {
  return <Home />;
};

export default Id;

export const getServerSideProps = async ({ id }: GetTodoByIdParam) => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery(["todo/useGetTodoById", id], () =>
      todoRepository.getTodoById({ id })
    ),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
