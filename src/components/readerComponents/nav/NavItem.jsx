import styled from "styled-components";
// lib
import * as styles from "../../../lib/styles/styles";
import palette from "../../../lib/styles/palette";

const NavItem = ({ message, onClick }) => {
  return (
    <Content onClick={onClick}>
      <span>{message}</span>
    </Content>
  );
};

const Content = styled.button`
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${palette.gray0};
  outline: none;
  border: none;

  & > span {
    transition: 0.2s ${styles.transition};
    font-size: 14px;
  }

  &:focus,
  &:hover {
    & > span {
      color: ${palette.blue3};
      margin-left: 12px;
    }
  }

  &:last-child {
    margin-bottom: 32px;
  }
`;

export default NavItem;
