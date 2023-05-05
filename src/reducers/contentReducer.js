import {
  CLEAR_CONTENT_LIST,
  FETCH_CONTENT_LIST,
  SET_SEARCH_QUERY,
  SET_PAGE_NUMBER,
} from "../constants";

export const contentList = (
  state = { data: [], hasMore: false, title: "", query: "", pageNumber: 1 },
  action
) => {
  switch (action.type) {
    case FETCH_CONTENT_LIST: {
      const contentList = [
        ...state.data,
        ...action.list.page["content-items"].content,
      ];
      const data = action.query.length
      ? contentList.filter((content) => {
            return (
              content.name.toLowerCase().includes(action.query.toLowerCase())
            );
          })
        : contentList;
      return {
        ...state,
        data: data,
        hasMore: action.list.page["page-num-requested"] !== "3",
        title: action.list.page.title,
      };
    }
    case CLEAR_CONTENT_LIST: {
      return {
        ...state,
        data: [],
      };
    }
    case SET_SEARCH_QUERY: {
      return {
        ...state,
        query: action.query,
        pageNumber: 1,
      };
    }
    case SET_PAGE_NUMBER: {
      return {
        ...state,
        pageNumber: action.pageNumber,
      };
    }
    default:
      return state;
  }
};
