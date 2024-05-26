import React, {useEffect, useState} from "react";
import {Col, Container, Row, Stack} from "react-bootstrap";
import styles from "../../styles/SearchResultContainer.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import {fetchMoreData} from "../../utils/utils";
import SearchResultItem from "../../components/SearchResultItem";
import {useLocation} from "react-router-dom";
import axios from "axios";

const SearchResultContainer = () => {
    const [posts, setPosts] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();
    const filter = undefined

    const [query, setQuery] = useState("");

    console.log("===========")

    useEffect(() => {
        console.log("<<<<<<<<<<<<<")
        const fetchPosts = async () => {
            try {
                console.log(">>>>>>>>>>>>>>>")
                const { data } = await axios.get(`/posts/?${filter || 'page=1'}&search=${query}`);
                console.log(data)
                setPosts(data);
                setHasLoaded(true);
            } catch (err) {
                console.log(err);
            }
        };

        fetchPosts();
    }, []);

    return (
        <Container className={styles.SearchResultContainer}>
            <Row>
                <Col>
                    <Stack>
                        {posts.results &&
                            <InfiniteScroll
                                dataLength={posts.results.length}
                                next={() => fetchMoreData(posts, setPosts)}
                                hasMore={!!posts.next}
                                loader={<h4>Loading...</h4>}
                                children={
                                    posts?.results?.map((article, index) => (<SearchResultItem key={index} article={article}></SearchResultItem>))
                                }
                            >
                            </InfiniteScroll>

                        }
                    </Stack>
                </Col>
            </Row>
        </Container>
    );
}

export default SearchResultContainer;
