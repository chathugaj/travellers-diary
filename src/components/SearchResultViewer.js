import React from "react";
import { Stack } from "react-bootstrap";
import styles from "../styles/SearchResultViewer.module.css";
import SearchResultItem from "./SearchResultItem";

function SearchResultViewer({articles}) {
  return (
    <Stack>
        {articles.map((article, index) => (<SearchResultItem key={index} article={article}></SearchResultItem>))}
    </Stack>
  );
}

export default SearchResultViewer;
