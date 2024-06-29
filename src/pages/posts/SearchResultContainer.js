import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/SearchResultContainer.module.css";
import {
  useSearchResult,
  useSetSearchResult,
} from "../../contexts/SearchContext";
import { fetchMoreData } from "../../utils/utils";
import InfiniteScroll from "react-infinite-scroll-component";
import SearchResultItem from "../../components/SearchResultItem";

const SearchResultContainer = () => {
  const searchResult = useSearchResult();
  const setSearchResult = useSetSearchResult();

  return (
    <Container className={styles.SearchResultContainer}>
      <Row>
        <Col>
          {searchResult && searchResult.results && (
            <InfiniteScroll
              dataLength={searchResult.results.length}
              next={() => fetchMoreData(searchResult, setSearchResult)}
              hasMore={!!searchResult.next}
              loader={<h4>Loading...</h4>}
              children={searchResult?.results?.map((article, index) => (
                <SearchResultItem
                  key={index}
                  article={article}
                ></SearchResultItem>
              ))}
            ></InfiniteScroll>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SearchResultContainer;
