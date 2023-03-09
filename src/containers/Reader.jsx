import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//components
import ViewerWrapper from "../components/readerComponents/commons/ViewWrapper";

//containers
import ReaderHeader from "./ReaderHeader";
import ReaderFooter from "./ReaderFooter";
import Nav from "../containers/menu/Nav";
import Option from "../containers/menu/Option";
import Learning from "../containers/menu/Note";

//epubviewer
import { ReactEpubViewer } from "react-epub-viewer";

//hooks
import useMenu from "../Hooks/useMenu";
// import useHighlight from '../Hooks/useHighlight'

//styles
import "../lib/styles/readerStyle.css";
import viewerLayout from "../lib/styles/viewerLayout";
import Spinner from "../components/spinner/Spinner";

//actions

import { updateCurrentPage, updateReadersBook, updateToc } from "../Actions";
import { useLocation } from "react-router-dom";

const Reader = ({ theme, setTheme }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const viewerRef = useRef(null);
  const optionRef = useRef(null);
  const learningRef = useRef(null);

  const navRef = useRef(null);

  const currentLocation = useSelector((state) => state.reader.currentLocation);

  const [navControl, onNavToggle] = useMenu(navRef, 300);
  const [optionControl, onOptionToggle, emitEvent] = useMenu(optionRef, 300);
  const [learningControl, onLearningToggle] = useMenu(learningRef, 300);

  const [bookStyle, setBookStyle] = useState({
    fontFamily: "Origin",
    fontSize: 18,
    lineHeight: 1.4,
    marginHorizontal: 15,
    marginVertical: 5,
  });

  const [bookOption, setBookOption] = useState({
    flow: "paginated",
    resizeOnOrientationChange: true,
    spread: "auto",
  });

  const onBookInfoChange = (book) => dispatch(updateReadersBook(book));
  const onPageChange = (page) => dispatch(updateCurrentPage(page));
  const onTocChange = (toc) => dispatch(updateToc(toc));
  const onBookStyleChange = (bookStyle_) => setBookStyle(bookStyle_);
  const onBookOptionChange = (bookOption_) => setBookOption(bookOption_);

  const onPageMove = (type) => {
    const node = viewerRef.current;
    if (!node || !node.prevPage || !node.nextPage) return;

    type === "PREV" && node.prevPage();
    type === "NEXT" && node.nextPage();
  };

  const onLocationChange = (loc) => {
    debugger;
    if (!viewerRef.current) return;
    viewerRef.current.setLocation(loc);
  };

  console.log("url is " + location.state.id);

  const sharedLink = localStorage.getItem("book");

  const changeToLight = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("light");
    }
  };

  const changeToDark = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("dark");
    }
  };
  return (
    <>
      <ViewerWrapper>
        <ReaderHeader
          onNavToggle={onNavToggle}
          onOptionToggle={onOptionToggle}
          onLearningToggle={onLearningToggle}
        />
        <ReactEpubViewer
          url={location.state.id}
          viewerLayout={viewerLayout}
          viewerStyle={bookStyle}
          viewerOption={bookOption}
          onBookInfoChange={onBookInfoChange}
          onPageChange={onPageChange}
          onTocChange={onTocChange}
          loadingView={<p>Loading up Book...</p>}
          ref={viewerRef}
        />
        <ReaderFooter
          title={currentLocation.chapterName}
          nowPage={currentLocation.currentPage}
          totalPage={currentLocation.totalPage}
          onPageMove={onPageMove}
        />
      </ViewerWrapper>

      <Nav control={navControl} onToggle={onNavToggle} onLocation={onLocationChange} ref={navRef} />

      <Option
        control={optionControl}
        bookStyle={bookStyle}
        bookOption={bookOption}
        bookFlow={bookOption.flow}
        onToggle={onOptionToggle}
        emitEvent={emitEvent}
        onBookStyleChange={onBookStyleChange}
        onBookOptionChange={onBookOptionChange}
        ref={optionRef}
        theme={theme}
        changeToLight={changeToLight}
        changeToDark={changeToDark}
      />

      <Learning
        control={learningControl}
        onToggle={onLearningToggle}
        ref={learningRef}
        link={sharedLink}
      />
    </>
  );
};

export default Reader;
