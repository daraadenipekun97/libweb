import styled from "styled-components";
// lib
import * as styles from "../../../lib/styles/styles";

const ViewerWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 0.5s ease;
  ${styles.scrollbar(0)};
`;

export default ViewerWrapper;
