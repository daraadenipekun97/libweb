import React, {useRef, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'


//components
import ViewerWrapper from '../components/readerComponents/commons/ViewWrapper'

//containers
import ReaderHeader from './ReaderHeader'
import ReaderFooter from './ReaderFooter'
import Nav from "../containers/menu/Nav"

//epubviewer
import { ReactEpubViewer } from 'react-epub-viewer'


//hooks
import useMenu from '../Hooks/useMenu'
// import useHighlight from '../Hooks/useHighlight'

//styles
import "../lib/styles/readerStyle.css"
import viewerLayout from '../lib/styles/viewerLayout'
import Spinner from '../components/spinner/Spinner'


//actions

import { updateCurrentPage, updateReadersBook, updateToc } from '../Actions'
import { useLocation } from 'react-router-dom'


const Reader = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const viewerRef = useRef(null);
    const navRef = useRef(null);
  



    const currentLocation = useSelector(state => state.reader.currentLocation);




    const [navControl, onNavToggle] = useMenu(navRef, 300);
   





    const [bookStyle, setBookStyle] = useState({
        fontFamily: 'Origin',
        fontSize: 12,
        lineHeight: 1.4,
        marginHorizontal: 15,
        marginVertical: 5
      });


      const [bookOption, setBookOption] = useState({
        flow: "paginated",
        resizeOnOrientationChange: true,
        spread: "auto"
      });




      const onBookInfoChange = (book) => dispatch(updateReadersBook(book));
      const onPageChange = (page) => dispatch(updateCurrentPage(page));
      const onTocChange = (toc) => dispatch(updateToc(toc));

      
      const onPageMove = (type) => {
		const node = viewerRef.current;
		if (!node || !node.prevPage || !node.nextPage) return;

		type === "PREV" && node.prevPage();
		type === "NEXT" && node.nextPage();
	};


    const onLocationChange = (loc) => {
        debugger
		if (!viewerRef.current) return;
		viewerRef.current.setLocation(loc);
	}	


    console.log("url is " + location.state.id)
 


  return (
    <>

        <ViewerWrapper>
            <ReaderHeader
            
            onNavToggle={onNavToggle}
          




            
            />
            <ReactEpubViewer 
                url={location.state.id}
                viewerLayout = {viewerLayout}
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


        <Nav
			control={navControl}
			onToggle={onNavToggle}
			onLocation={onLocationChange}
			ref={navRef}
		/>

    </>
  )
}

export default Reader