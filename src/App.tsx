import './App.css'

import {PostList} from "./components/Post/PostList.tsx";
import {FormData} from "./components/FormData/FormData.tsx";
import {usePosts} from "./zustand/store.ts";


function App() {
    const posts = usePosts(state => state.posts)


    return (
        <div className="App">
            <FormData/>
            {posts.length
                    ? <PostList/>
                    : <h1 className="listEpmty">Список постов пуст</h1>
            }
        </div>
    )
}

export default App
