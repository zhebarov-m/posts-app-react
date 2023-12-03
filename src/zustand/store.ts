import {create} from "zustand";
import axios from "axios";

const API_URL = 'https://856fab540973ca30.mokky.dev/posts'

type iPost = {
    id: number;
    title: string;
    body: string;
};

type tPostProps = {
    posts: iPost[];
    title: string;
    // setPosts: (posts: iPost[]) => void;
    fetchPosts: () => Promise<void>,
    addNewPost: (data: {title: string, body: string}) => void,
    removePost: (post: iPost) => void
};

export const usePosts = create<tPostProps>((set) => ({
    posts: [{title: '', id: 0, body: ''}],
    title: 'Список постов',
    // setPosts: (posts) => set({posts}),
    fetchPosts: async () => {
        try {
            const {data} = await axios.get(API_URL);
            set({posts: data});
        } catch (error) {
            console.error('Ошибка получения данных', error);
        }
    },
    addNewPost: (data) => set(state => {
        const newPost = {id: state.posts[state.posts.length - 1].id + 1 , title: data.title, body: data.body}

        return {posts: [...state.posts, newPost]}
    }),
    removePost: (post) => set(state => {
        return {posts: state.posts.filter(p => p.id !== post.id)}
    })
}));