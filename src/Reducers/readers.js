import {
  UPDATE_CURRENT_PAGE,
  UPDATE_TOC,
  CLEAR_BOOK,
  CLEAR_TOC,
  UPDATE_READERS_BOOK,
} from "../ActionTypes";
import palette from "../lib/styles/palette";

const initialBook = {
  coverURL: "",
  title: "",
  description: "",
  published_date: "",
  modified_date: "",
  author: "",
  publisher: "",
  language: "",
};

const initialCurrentLocation = {
  chapterName: "-",
  currentPage: 0,
  totalPage: 0,
  startCfi: "",
  endCfi: "",
  base: "",
};

const initialColorList = [
  { name: "Red", code: palette.red4 },
  { name: "Orange", code: palette.orange4 },
  { name: "Yellow", code: palette.yellow4 },
  { name: "Green", code: palette.green4 },
  { name: "Blue", code: palette.blue4 },
  { name: "Purple", code: palette.purple4 },
];

const INIT_STATE = {
  book: initialBook,
  currentLocation: initialCurrentLocation,
  toc: [],
  colorList: initialColorList,
};

const readersReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_PAGE: {
      return {
        ...state,
        currentLocation: action.payload,
      };
    }

    case UPDATE_TOC: {
      return {
        ...state,
        toc: action.payload,
      };
    }

    case CLEAR_BOOK: {
      return {
        ...state,
        book: initialBook,
      };
    }

    case CLEAR_TOC: {
      return {
        ...state,
        toc: [],
      };
    }

    case UPDATE_READERS_BOOK: {
      return {
        ...state,
        book: action.payload,
      };
    }

    default:
      return state;
  }
};

export default readersReducer;
