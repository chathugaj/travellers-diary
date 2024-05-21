import React, {useEffect} from "react";
import { ArticleCardContainer, ContentSearch } from "../components";
import fetchDefaults from "../api/fetchDefaults";

const Home = () => {
    const [articles, setArticles] = React.useState([]);

    useEffect( () => {
        async function fetchArticles () {
            const response = await fetch(`${fetchDefaults.baseUrl}/posts`, {
                method: "GET",
                headers: fetchDefaults.headers
            });
            const { status } = response;
            const articles = await response.json();
            setArticles(articles?.slice(0, Math.min(3, articles.length)));
        }
        fetchArticles();
    }, []);


  return (
    <>
      <ContentSearch></ContentSearch>
      <ArticleCardContainer articles={articles}></ArticleCardContainer>
    </>
  );
};

export default Home;
