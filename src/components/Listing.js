import { useRef, useCallback } from "react";
import { connect } from "react-redux";
import useContentList from "../customHooks/useContentList";
import ListItem from "./ListItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { setPageNumber } from "../actions/content";
import './common.css'

const Listing = (props) => {
  const {
    loading,
    error,
  } = useContentList(props.query, props.pageNumber );

  const observer = useRef();
  const lastContentElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      // for fetching more data
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && props.hasMore) {
          props.setPageNumber(props.pageNumber + 1);
        }
      }, 
      {rootMargin: '300px'}
      );
      if (node) observer.current.observe(node);
    },
    [loading, props.hasMore]
  );

  if(!props.data.length){
    return <div className="no_list">No content Found</div>
  }
  if(error) {
    return <div className="no_list">Something Went Wrong.Please refresh the page and try again.</div>
  }
  return (
    <>
      <Container>
        <Row xs={3} >
          {props.data.map((content, index) => {
            return (
              <Col key={index} className="listItems">
                <ListItem
                  name={content.name}
                  posterImage={content["poster-image"]}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      {props.data.length && <div id='test' ref={lastContentElementRef}></div>}
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setPageNumber: (pageNumber) => dispatch(setPageNumber(pageNumber)),
  }
}


const mapStateToProps = (state) => {
  return { data: state.contentList.data, hasMore: state.contentList.hasMore, query: state.contentList.query, pageNumber: state.contentList.pageNumber };
};
export default connect(mapStateToProps, mapDispatchToProps)(Listing);
