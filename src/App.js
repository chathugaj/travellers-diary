import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import PageFooter from "./components/PageFooter";
import ContentSearch from "./components/ContentSearch";
import ArticleCardContainer from "./components/ArticleCardContainer";

function App() {
  return (
    <div className={styles.App}>
      <NavBar></NavBar>
      <Banner></Banner>

      <ContentSearch></ContentSearch>

      <ArticleCardContainer></ArticleCardContainer>

      <PageFooter></PageFooter>
    </div>
  );
}

export default App;
