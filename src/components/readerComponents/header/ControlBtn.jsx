import styled from "styled-components";
// lib
import * as styles from "../../../lib/styles/styles";
import palette from "../../../lib/styles/palette";

const ControlBtn = ({ message, onClick }) => {
  return <Btn onClick={() => onClick()}>{message}</Btn>;
};

const Btn = styled.button`
  height: 100%;
  padding: 0 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.1s ${styles.transition};
  outline: none;
  border: none;
  background:transparent &:focus,
  &:hover {
    color: ${palette.blue3};
  }

  &:first-child {
    margin-left: 8px;
  }
`;

export default ControlBtn;
