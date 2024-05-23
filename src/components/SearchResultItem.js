import React from "react";
import styles from "../styles/SearchResultItem.module.css";
import {Link} from "react-router-dom";

function SearchResultItem({article}) {
  return (
    <div className={styles.SearchItem}>
      <div>
        <Link className={styles.SearchItemLink} to={`${article?.id}`}>
            {article?.title}
        </Link>
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
