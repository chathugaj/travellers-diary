import {createContext, useContext, useEffect, useState} from "react";
import fetchDefaults from "../api/fetchDefaults";

export const SearchResultContext = createContext();
export const SetSearchResultContext = createContext()

export const useSearchResult = () => useContext(SearchResultContext)
export const useSetSearchResult = () => useContext(SetSearchResultContext)
export async function fetchArticles() {
    const response = await fetch(`${fetchDefaults.baseUrl}/posts`, {
        method: "GET",
        headers: fetchDefaults.headers
    });
    const {status} = response;
    const articles = await response.json();
    return articles
}

export const SearchResultProvider = ({ children }) => {
    const [searchResult, setSearchResult] = useState([])

    useEffect( () => {
        fetchArticles()
            .then(articles => setSearchResult(articles))
    }, []);

    return (
        <SearchResultContext.Provider value={searchResult}>
            <SetSearchResultContext.Provider value={setSearchResult}>
                {children}
            </SetSearchResultContext.Provider>
        </SearchResultContext.Provider>
    )
}