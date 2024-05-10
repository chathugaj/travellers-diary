import React from "react";
import styles from "../styles/SearchResultItem.module.css";

function SearchResultItem() {
  return (
    <div className={styles.SearchItem}>
      <div>
        <a className={styles.SearchItemLink} href="#">
          My Excursion to Swedish mountains
        </a>
      </div>
      <div>
        <span className={styles.SearchResultText}>
          This is my first excursion to Swedish mountains. It is a bogus post to
          test out the design. I have nothing more to say but still this line
          goes on
        </span>
      </div>
      <div>
        <span className={styles.SearchResultAnnotations}>
          Alexander Svensson
        </span>
        <span className={styles.SearchResultAnnotations}>2024-04-28</span>
      </div>
    </div>
  );
}

export default SearchResultItem;
