import axios from "axios";

const API_URL = 'https://856fab540973ca30.mokky.dev/posts';

export const fetchPosts = async () => {
    try {
        const response = await axios.get(API_URL);

        return {
            posts: response.data,
            totalCount: response.headers['x-total-count']
        };
    } catch (error) {
        console.error('Ошибка получения данных', error);
        throw error;
    }
};
