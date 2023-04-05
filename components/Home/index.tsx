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
import { useRouter } from "next/router";
import HomeTodoDetail from "./HomeTodoItem/HomeTodoDetail";
import Modal from "../Common/Modal";
import useModal from "../../hooks/Modal/useModal";
import useLogout from "../../hooks/Auth/useLogout";
import useTokenCheck from "../../hooks/Auth/useTokencheck";

const Home = () => {
  const router = useRouter();
  const detailModal = useModal();
  const { onLogout } = useLogout();
  const { isAuthority } = useTokenCheck();

  if (!isAuthority) {
    window.alert("토큰이 없습니다");
    router.push("/auth/login");
    return;
  }

  return (
    <>
      {router.query.id ? (
        <HomeTodoDetail id={router.query.id as string} />
      ) : (
        <HomeContainer>
          <HomeTopWrap>
            <HomeTopSideWrap>
              <HomeProfieImage src={Profile.src} />
              <HomeProfileWrap>
                <HomeProfileText>Hi Guy 👋🏽</HomeProfileText>
                <HomeTodoLength>열심히 살아 봅시다</HomeTodoLength>
              </HomeProfileWrap>
            </HomeTopSideWrap>
            <HomeTitle>ToDo List</HomeTitle>
            <HomeLogoutText onClick={onLogout}>로그아웃</HomeLogoutText>
          </HomeTopWrap>
          <HomeTodoList />
        </HomeContainer>
      )}
    </>
  );
};

export default Home;
