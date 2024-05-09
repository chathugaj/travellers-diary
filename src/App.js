import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import PageFooter from "./components/PageFooter";
import ContentSearch from "./components/ContentSearch";

function App() {
  return (
    <div className={styles.App}>
      <NavBar></NavBar>
      <Banner></Banner>
      <div>
        <ContentSearch></ContentSearch>
        <br />

        <br />
      </div>
      <PageFooter></PageFooter>
    </div>
  );
}

export default App;
