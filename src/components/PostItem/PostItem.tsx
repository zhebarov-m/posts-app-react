import styles from './PostItem.module.scss'
import {classNames} from "../../lib/classNames.ts";
import {FC} from "react";
import {Button} from "../UI/button/Button.tsx";
import {usePostsStore} from "../../zustand/store.ts";

type tPost = {
    id: number,
    title: string,
    body: string
}

interface PostItemProps {
    className?: string,
    post: tPost,
    index: number
}

export const PostItem:FC<PostItemProps> = (props) => {
    const {className, post, index} = props
    const removePost = usePostsStore(state => state.removePost)

    return (
        <div className={classNames(styles.Post, {}, [className!])}>
            <div className="postContent">
                <strong>{index + 1}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="postBtns">
                <Button onClick={() => removePost(post)}>Удалить</Button>
            </div>
        </div>
    );
};