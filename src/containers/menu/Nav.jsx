import React from "react";
import { useSelector } from "react-redux";
// components
import Wrapper from "../../components/readerComponents/sideMenu/Wrapper";
import BookInfo from "../../components/readerComponents/nav/BookInfo";
import NavItem from "../../components/readerComponents/nav/NavItem";

import { MenuControl } from "../../Hooks/useMenu";

const Nav = ({ control, onToggle, onLocation }, ref) => {
  const book = useSelector((state) => state.reader.book);
  const bookToc = useSelector((state) => state.reader.toc);

  /** Click nav item */
  const onClickItem = (loc) => {
    onLocation(loc);
    onToggle();
  };

  console.log(book);

  const Tocs = bookToc.map((t, idx) => (
    <NavItem key={idx} message={t.label} onClick={() => onClickItem(t.href)} />
  ));

  return (
    <>
      {control.display && (
        <Wrapper title="Contents" show={control.open} onClose={onToggle} ref={ref}>
          <BookInfo
            src={book.coverURL}
            title={book.title}
            publisher={book.publisher}
            author={book.author}
          />
          {Tocs}
        </Wrapper>
      )}
    </>
  );
};

export default React.forwardRef(Nav);
