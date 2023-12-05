import {PostList} from "../components/Post/PostList.tsx";
import {usePosts} from "../zustand/store.ts";
import {FormData} from "../components/FormData/FormData.tsx";

const HomePage = () => {
    const posts = usePosts(state => state.posts)

    return (
        <div>
            <FormData/>
            {posts.length
                ? <PostList/>
                : <h1 className="listEpmty">Список постов пуст</h1>
            }
        </div>
    );
};

export default HomePage;