import {create} from 'zustand';
import ky from "ky";

const API_URL = 'https://856fab540973ca30.mokky.dev/posts';

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
    modal: boolean,
    setModal: (modal: boolean) => void
    setPosts: (posts: iPost[]) => void;
    setIsLoading: (isPostLoading: boolean) => void
    setFilteredPosts: (filteredPosts: iPost[]) => void;
    fetchPosts: () => Promise<void>;
    addNewPost: (data: { title: string; body: string }) => void;
    removePost: (post: iPost) => void;
};

export const usePostsStore = create<tPostProps>((set) => ({
    posts: [],
    isLoading: true,
    filteredPosts: [],
    title: 'Список постов',
    modal: false,
    setModal: (modal: boolean) => set({modal}),
    setPosts: (posts: iPost[]) => set({posts}),
    setIsLoading: (isLoading: boolean) => set({isLoading}),
    setFilteredPosts: (filteredPosts: iPost[]) => set({ filteredPosts }),
    fetchPosts: async () => {
        try {
            setTimeout(async () => {
                const data: iPost[] = await ky.get(API_URL).json();
                set({posts: data, filteredPosts: data, isLoading: false});
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
