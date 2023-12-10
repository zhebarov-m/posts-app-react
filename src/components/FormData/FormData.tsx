// import styles from './FormData.module.scss'
import {classNames} from "../../lib/classNames.ts";
import {FC, FormEvent, HTMLProps, useState} from "react";
import {Button} from "../UI/button/Button.tsx";
import {Input} from "../UI/input/Input.tsx";
import {Textarea} from "../UI/textarea/Textarea.tsx";
import {usePostsStore} from "../../zustand/store.ts";

interface iFormDataProps extends HTMLProps<HTMLFormElement> {
    className?: string
}

export const FormData: FC<iFormDataProps> = (props) => {
    const {className} = props
    const addNewPost = usePostsStore(state => state.addNewPost)
    const setModal = usePostsStore(state => state.setModal)
    const [formData, setFormData] = useState({ title: '', body: '' });
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (formData.title.trim() === '' || formData.body.trim() === '') {
            alert('Нельзя добавить пост с пустыми данными')
            return;
        }

        addNewPost(formData)
        setFormData({title: '', body: ''})
        setModal(false)
    }

    return (
        <form onSubmit={handleSubmit} className={classNames('styles.FormData', {}, [className!])}>
            <Input
                onChange={(event) => setFormData({...formData, title: event.target.value})}
                name="title"
                value={formData.title} type="text"
                placeholder={'Название поста...'}
            />
            <Textarea
                onChange={(event) => setFormData({...formData, body: event.target.value})}
                name="body"
                value={formData.body}
                placeholder={'Описание поста...'}
            />
            <Button
                type={"submit"}
            >
                Создать пост
            </Button>
        </form>
    );
};