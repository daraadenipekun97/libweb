import styled from "styled-components";
// lib
import palette from "../../../lib/styles/palette";
import { CopyIcon } from "../../../lib/svg";
import { AiOutlineCopy } from "react-icons/ai";
const MenuEmpty = ({ text }) => {
  const handleCopy = () => {
    let copyText = document.getElementById("link");
    navigator.clipboard.writeText(copyText.innerHTML);
    alert("Copied the shareable link: " + copyText.innerHTML);
  };

  return (
    <Content onClick={() => handleCopy()} id="link">
      {text}
    </Content>
  );
};

const Content = styled.div`
  height: auto;
  color: ${palette.blue2};
  font-size: 18px;
  cursor: pointer;
  margin: 10px 0px;

  &:hover {
    text-decoration: underline;
    padding: 5px 5px;
  }
  &:active {
    color: #5e458b;
  }
`;

export default MenuEmpty;
