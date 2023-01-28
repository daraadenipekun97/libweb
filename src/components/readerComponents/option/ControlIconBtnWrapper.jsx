import styled from "styled-components";
// components
import OptionWrapper from "./OptionWrapper";
import OptionTitle from "./OptionTitle";

const ControlIconBtnWrapper = ({ title, children }) => {
  return (
    <OptionWrapper>
      <OptionTitle>{title}</OptionTitle>
      <BtnWrapper>{children}</BtnWrapper>
    </OptionWrapper>
  );
};

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 8px 0;
`;

export default ControlIconBtnWrapper;
