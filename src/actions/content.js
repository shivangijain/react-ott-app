import axios from "axios";
import { FETCH_CONTENT_LIST, CLEAR_CONTENT_LIST, SET_SEARCH_QUERY,SET_PAGE_NUMBER, API_URL } from "../constants";

const fetchList = (data, query) => {
	return {
		type: FETCH_CONTENT_LIST,
		list: data,
    query
	};
};

const clearList = () => {
  return {
		type: CLEAR_CONTENT_LIST,
	};
};

const setQuery = (query) => {
  return {
		type: SET_SEARCH_QUERY,
		query,
	};
}

const setPage = (pageNumber) => {
  return {
		type: SET_PAGE_NUMBER,
		pageNumber,
	};
}

export const clearContentList = () => dispatch => {
  dispatch(clearList())
}

export const getContentList = ({page, query}) => async (dispatch) => {
  const response = await axios.get(`${API_URL}/api/CONTENTLISTINGPAGE-PAGE${page}.json`);
  if (response.status === 200) {
    dispatch(fetchList(response.data, query))
  }
};

export const setSearchQuery = (query) => dispatch => {
  dispatch(setQuery(query));
}

export const setPageNumber = (pageNumber) => dispatch => {
  dispatch(setPage(pageNumber));
}
