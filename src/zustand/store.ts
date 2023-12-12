import {create} from 'zustand';
import axios from "axios";

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export type iPost = {
    id: number;
    title: string;
    body: string;
};

type tPostProps = {
    posts: iPost[];
    isLoading: boolean;
    filteredPosts: iPost[];
    title: string;
    limit: number,
    page: number,
    modal: boolean,
    totalPages: number,
    setTotalPages: (totalPages: number) => void,
    setLimit: (limit: number) => void,
    setPage: (page: number) => void,
    setModal: (modal: boolean) => void
    setPosts: (posts: iPost[]) => void;
    setIsLoading: (isPostLoading: boolean) => void
    setFilteredPosts: (filteredPosts: iPost[]) => void;
    fetchPosts: (limit: number, page: number) => Promise<void>;
    addNewPost: (data: { title: string; body: string }) => void;
    removePost: (post: iPost) => void;
};

export const usePostsStore = create<tPostProps>((set) => ({
    posts: [],
    isLoading: true,
    limit: 10,
    page: 1,
    totalPages: 0,
    filteredPosts: [],
    title: 'Список постов',
    modal: false,
    setLimit: (limit: number) => set({limit}),
    setPage: (page: number) => set({page}),
    setModal: (modal: boolean) => set({modal}),
    setPosts: (posts: iPost[]) => set({posts}),
    setTotalPages: (totalPages: number) => set({totalPages}),
    setIsLoading: (isLoading: boolean) => set({isLoading}),
    setFilteredPosts: (filteredPosts: iPost[]) => set({filteredPosts}),
    fetchPosts: async (limit = 10, page = 1) => {
        try {
            setTimeout(async () => {
                const response = await axios.get(API_URL, {
                    params: {
                        _limit: limit,
                        _page: page,
                    }
                });
                set({
                    posts: response.data,
                    filteredPosts: response.data,
                    isLoading: false,
                    totalPages: Math.ceil(response.headers['x-total-count'] / limit)
                });
            }, 1000)
        } catch (error) {
            console.error('Ошибка получения данных', error);
        }
    },
    addNewPost: (data) => {
        set((state) => {
            const newPost = {
                id: state.posts[state.posts.length - 1].id + 1,
                title: data.title,
                body: data.body,
            };

            return {posts: [...state.posts, newPost], filteredPosts: [...state.filteredPosts, newPost]};
        })
    },

    removePost: (post) =>
        set((state) => {
            return {
                posts: state.posts.filter((p) => p.id !== post.id),
                filteredPosts: state.filteredPosts.filter((p) => p.id !== post.id),
            };
        }),
}));
