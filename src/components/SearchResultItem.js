import React from "react";
import styles from "../styles/SearchResultItem.module.css";

function SearchResultItem({article}) {
  return (
    <div className={styles.SearchItem}>
      <div>
        <a className={styles.SearchItemLink} href="#">
            {article?.title}
        </a>
      </div>
      <div>
        <span className={styles.SearchResultText}>
          {article?.body}
        </span>
      </div>
      <div>
        <span className={styles.SearchResultAnnotations}>
          {article?.owner}
        </span>
        <span className={styles.SearchResultAnnotations}>
            {article?.created_at?.slice(0, 10)}
        </span>
      </div>
    </div>
  );
}

export default SearchResultItem;
