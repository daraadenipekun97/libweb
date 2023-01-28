import styled from "styled-components";
// lib
import palette from "../../../lib/styles/palette";

const VerticalLine = ({ height = 16 }) => {
  return <Bar height={height} />;
};

const Bar =
  styled.div <
  { height } >
  `
  width: 1px;
  height: ${({ height }) => height + "px"};
  margin: 0 8px;
  background-color: ${palette.gray2};
`;

export default VerticalLine;
