import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Wrapper from "../../components/readerComponents/sideMenu/Wrapper";
import LearningLayout from "../../components/readerComponents/share/Layout";
import MenuEmpty from "../../components/readerComponents/share/MenuEmpty";
import { useSelector } from "react-redux";

const Note = ({ control, onToggle, link }, ref) => {
  const book = useSelector((state) => state.reader.book);

  return (
    <>
      {control.display && (
        <Wrapper title="Share" show={control.open} onClose={onToggle} ref={ref}>
          <LearningLayout>
            <p>Click the link below to copy and share</p>
            <MenuEmpty text={link} />
            <Content>
              <img src={book.coverURL} alt={book.title} />
              <h3 style={{ color: "#5e458b" }}>{book.title}</h3>
            </Content>
          </LearningLayout>
        </Wrapper>
      )}
    </>
  );
};

const Content = styled.div`
  height: 200px;
  cursor: pointer;
  height: 80%;
  text-align: center;

  & > img {
    width: 100%;
    border-radius: 20px;
    margin-bottom: 10px;
  }
`;

export default React.forwardRef(Note);
