import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #ebebeb; ;
`;

export const HomeWrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 1288px;
  min-height: 733px;
  background: #ffffff;

  padding-left: 104px;
  padding-top: 30px;
`;

export const HomeTitle = styled.h1`
  font-size: 50px;

  color: #5e5e5e;
`;

export const HomeTopWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const HomeTopSideWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const HomeProfieImage = styled.img``;

export const HomeProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeProfileText = styled.p``;

export const HomeTodoLength = styled.p``;

export const HomeLogoutText = styled.p`
  font-size: 24px;

  color: #b47aea;

  cursor: pointer;
`;

export const HomeAddContainer = styled.div`
  width: 100%;

  display: flex;
  gap: 20px;
  cursor: pointer;
`;

export const HomeTodoAddText = styled.p`
  font-size: 30px;

  color: black;
`;
