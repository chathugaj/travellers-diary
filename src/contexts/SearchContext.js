import {createContext, useContext, useEffect, useState} from "react";
import axios from "../api/axiosDefaults";

export const SearchResultContext = createContext();
export const SetSearchResultContext = createContext()

export const useSearchResult = () => useContext(SearchResultContext)
export const useSetSearchResult = () => useContext(SetSearchResultContext)
export async function fetchArticles(search) {
    let url = "/posts/"
    if (search) {
        url = `${url}?search=${search}`
    }
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (e) {
        console.log(e)
    }
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