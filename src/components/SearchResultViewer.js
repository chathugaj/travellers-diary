import React from "react";
import { Stack } from "react-bootstrap";
import styles from "../styles/SearchResultViewer.module.css";
import SearchResultItem from "./SearchResultItem";

function SearchResultViewer() {
  return (
    <Stack>
      <SearchResultItem></SearchResultItem>
      <SearchResultItem></SearchResultItem>
      <SearchResultItem></SearchResultItem>
      <SearchResultItem></SearchResultItem>
      <SearchResultItem></SearchResultItem>
      <SearchResultItem></SearchResultItem>
    </Stack>
  );
}

export default SearchResultViewer;
