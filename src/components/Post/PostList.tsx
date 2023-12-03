import styles from './PostList.module.scss'
import {classNames} from "../../lib/classNames.ts";
import {usePosts} from "../../zustand/store.ts";
import {FC, useEffect} from "react";
import {PostItem} from "../PostItem/PostItem.tsx";

interface iPostProps {
    className?: string
}

export const PostList:FC<iPostProps> = (props) => {
    const {className} = props

    const { posts, fetchPosts, title} = usePosts()

    useEffect(() => {
        fetchPosts()
    }, []);

    return (
        <div className={classNames(styles.Post, {}, [className!])}>
            <h1 className={styles.title}>
                {title}
            </h1>
            {posts.map((post, index) => <PostItem key={post.id} post={post} index={index}/>)}
        </div>
    );
};