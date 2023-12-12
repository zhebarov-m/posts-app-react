import {useEffect, useState} from 'react';
import {PostList} from '../components/Post/PostList.tsx';
import {usePostsStore} from '../zustand/store.ts';
import {FormData} from '../components/FormData/FormData.tsx';
import {PostFilter} from "../components/PostFilter/PostFilter.tsx";
import {Modal} from "../components/UI/modal/Modal.tsx";
import {Button} from "../components/UI/button/Button.tsx";
import {usePosts} from "../hooks/usePosts.ts";
import {Loader} from "../components/UI/Loader/Loader.tsx";

const HomePage = () => {
    const {posts, limit, totalPages, page, setFilteredPosts, setModal, isLoading, fetchPosts} = usePostsStore((state) => ({
        posts: state.posts,
        limit: state.limit,
        page: state.page,
        modal: state.modal,
        totalPages: state.totalPages,
        fetchPosts: state.fetchPosts,
        setModal: state.setModal,
        setFilteredPosts: state.setFilteredPosts,
        isLoading: state.isLoading
    }));
    const [filter, setFilter] = useState({sort: '', query: ''});
    const filteredPosts = usePosts(posts, filter.sort, filter.query)
    console.log(totalPages)

    useEffect(() => {
        if (filter.query || filter.sort) {
            setFilteredPosts(filteredPosts)
        } else {
            setFilteredPosts(posts)
        }
    }, [filteredPosts, setFilteredPosts]);

    useEffect(() => {
        fetchPosts(limit, page)
    }, []);

    return (
        <div>
            <Button onClick={() => setModal(true)}>
                Создать пользователя
            </Button>
            <Modal>
                <FormData/>
            </Modal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {isLoading ? <Loader /> : <PostList/> }
        </div>
    );
};

export default HomePage;
