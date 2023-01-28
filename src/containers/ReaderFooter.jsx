import React from "react";
import Item from "../components/readerComponents/footer/Item";
import MoveBtn from "../components/readerComponents/footer/MoveBtn";
import Wrapper from "../components/readerComponents/footer/Wrapper";

const ReaderFooter = ({ title, nowPage, totalPage, onPageMove }) => {
  return (
    <Wrapper>
      <MoveBtn type="PREV" onClick={() => onPageMove("PREV")} />
      <Item text={title} />
      <Item text={`${nowPage} / ${totalPage}`} />
      <MoveBtn type="NEXT" onClick={() => onPageMove("NEXT")} />
    </Wrapper>
  );
};

export default ReaderFooter;
