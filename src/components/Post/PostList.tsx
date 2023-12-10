// PostList.tsx
import {FC, useEffect} from 'react';
import {usePostsStore} from '../../zustand/store.ts';
import {PostItem} from '../PostItem/PostItem.tsx';
import styles from './PostList.module.scss';
import {classNames} from '../../lib/classNames.ts';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

interface iPostListProps {
    className?: string;
}

export const PostList: FC<iPostListProps> = ({className}) => {
    const {filteredPosts, fetchPosts, title} = usePostsStore();

    useEffect(() => {
        fetchPosts();
    }, []);

    if (!filteredPosts.length) {
        return <h1 className="listEpmty">Список постов пуст</h1>;
    }

    return (
        <div className={classNames(styles.Post, {}, [className!])}>
            <h1 className={styles.title}>{title}</h1>
            <TransitionGroup>
                {filteredPosts.map((post, index) => (
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem post={post} index={index}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>

        </div>
    );
};
