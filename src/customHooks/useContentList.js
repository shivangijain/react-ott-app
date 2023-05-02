import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getContentList, clearContentList } from "../actions/content";

export default function useContentList(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearContentList())
  }, [dispatch, query])

  useEffect(() => {
    setLoading(true);
    setError(false);
    dispatch(getContentList({ page: pageNumber, query: query }))
      .then((res) => {
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
      });
  }, [query, pageNumber, dispatch]);

  return { loading, error };
}