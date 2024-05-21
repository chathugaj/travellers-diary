import React, {useEffect} from "react";
import {ContentSearch, SearchResultContainer} from "../components";
import fetchDefaults from "../api/fetchDefaults";

const BlogPosts = () => {
    const [articles, setArticles] = React.useState([]);

    useEffect(() => {
        async function fetchArticles() {
            const response = await fetch(`${fetchDefaults.baseUrl}/posts`, {
                method: "GET",
                headers: fetchDefaults.headers
            });
            const {status} = response;
            const articles = await response.json();
            setArticles(articles);
        }

        fetchArticles();
    }, []);

    return (
        <>
            <ContentSearch></ContentSearch>
            <SearchResultContainer articles={articles} ></SearchResultContainer>
        </>
    );
};

export default BlogPosts;
