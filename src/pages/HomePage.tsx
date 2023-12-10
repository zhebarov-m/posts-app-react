import {useEffect, useState} from 'react';
import {PostList} from '../components/Post/PostList.tsx';
import {usePostsStore} from '../zustand/store.ts';
import {FormData} from '../components/FormData/FormData.tsx';
import {PostFilter} from "../components/PostFilter/PostFilter.tsx";
import {Modal} from "../components/UI/modal/Modal.tsx";
import {Button} from "../components/UI/button/Button.tsx";
import {usePosts} from "../hooks/usePosts.ts";

const HomePage = () => {
    const {posts, setFilteredPosts, setModal} = usePostsStore((state) => ({
        posts: state.posts,
        modal: state.modal,
        setModal: state.setModal,
        setFilteredPosts: state.setFilteredPosts,
    }));
    const [filter, setFilter] = useState({sort: '', query: ''});
    const filteredPosts = usePosts(posts, filter.sort, filter.query)


    useEffect(() => {
        if (filter.query || filter.sort) {
            setFilteredPosts(filteredPosts)
        } else {
            setFilteredPosts(posts)
        }
    }, [filteredPosts, setFilteredPosts]);

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
            <PostList/>
        </div>
    );
};

export default HomePage;
