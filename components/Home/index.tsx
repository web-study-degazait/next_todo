import React from "react";
import {
  HomeContainer,
  HomeLogoutText,
  HomeProfieImage,
  HomeProfileText,
  HomeProfileWrap,
  HomeTitle,
  HomeTodoLength,
  HomeTopSideWrap,
  HomeTopWrap,
} from "./style";
import Profile from "../../asset/Profile.svg";
import HomeTodoList from "./HomeTodoList";
import { useGetTodosQuery } from "../../queries/Todo/Todo.query";

const Home = () => {
  return (
    <HomeContainer>
      <HomeTopWrap>
        <HomeTopSideWrap>
          <HomeProfieImage src={Profile.src} />
          <HomeProfileWrap>
            <HomeProfileText>Hi Guy 👋🏽</HomeProfileText>
            <HomeTodoLength>4 tasks pending</HomeTodoLength>
          </HomeProfileWrap>
        </HomeTopSideWrap>
        <HomeTitle>ToDo List</HomeTitle>
        <HomeLogoutText>로그아웃</HomeLogoutText>
      </HomeTopWrap>
      <HomeTodoList />
    </HomeContainer>
  );
};

export default Home;
