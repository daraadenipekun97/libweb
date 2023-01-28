import styled from "styled-components";
// icons
import { PrevIcon, NextIcon } from "../../../lib/svg/index";
// lib
import * as styles from "../../../lib/styles/styles";

const MoveBtn = ({ type, onClick }) => {
  const Icon = type === "PREV" ? PrevIcon : NextIcon;

  const msg = type === "PREV" ? "Previous Page" : "Next Page";

  return (
    <Container onClick={onClick} title={msg}>
      <Content>
        <Icon />
      </Content>
    </Container>
  );
};

const Container = styled.button`
  min-width: 60px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  border: none;
  background:transparent &:focus,
  &:hover {
    filter: invert(40%) sepia(85%) saturate(1256%) hue-rotate(210deg) brightness(113%)
      contrast(101%);
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.1s ${styles.transition};

  & > svg {
    width: 18px;
    height: 18px;
  }
`;

export default MoveBtn;
