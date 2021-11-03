import React from 'react';
import style from './ListItem.module.css';
import MyButton from '../UI/MyButton/MyButton';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';

const ListItem = ({post, removePost}) => {
    const history = useHistory();

    return (
        <div className={style.post}>
            <div className="post__header">{post.id} {post.name} {post.surname} {post.email}</div>
            <div className="post__body">{post.description}</div>
            <div className={style.post__buttons}>
                <MyButton onClick={() => history.push(`/posts/${post.id}`)}>Открыть</MyButton>
                <MyButton className="post__buttons__delete" onClick={(e) => removePost(post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default ListItem;