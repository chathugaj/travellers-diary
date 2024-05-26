import {createContext, useContext, useEffect, useState} from "react";
import axios from "../api/axiosDefaults";
import {useLocation} from "react-router-dom";

export const SearchResultContext = createContext();
export const SetSearchResultContext = createContext()

export const useSearchResult = () => useContext(SearchResultContext)
export const useSetSearchResult = () => useContext(SetSearchResultContext)

export const SearchResultProvider = ({ children }) => {
    const [posts, setPosts] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();
    const filter = undefined

    const [query, setQuery] = useState("");

    console.log("===========")

    useEffect(() => {
        console.log("<<<<<<<<<<<<<")
        const fetchPosts = async () => {
            try {
                console.log(">>>>>>>>>>>>>>>")
                const { data } = await axios.get(`/posts/?${filter || 'page=1'}&search=${query}`);
                console.log(data)
                setPosts(data);
                setHasLoaded(true);
            } catch (err) {
                console.log(err);
            }
        };

        fetchPosts();
    }, []);

    return (
        <SearchResultContext.Provider value={posts}>
            <SetSearchResultContext.Provider value={setPosts}>
                {children}
            </SetSearchResultContext.Provider>
        </SearchResultContext.Provider>
    )
}