import {useMemo} from "react";
import {iPost} from "../zustand/store.ts";

export const usePosts = (posts: iPost[], sort: string, query: string) => {
    return useMemo(() => {
        const sortedAndSearchedPosts = [...posts].filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
        if (sort) {
            // @ts-ignore
            return sortedAndSearchedPosts.sort((a, b) => a[sort].localeCompare(b[sort]));
        } else {
            return sortedAndSearchedPosts;
        }
    }, [query, sort, posts])
}