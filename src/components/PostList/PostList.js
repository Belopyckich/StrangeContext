import React, { useContext, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Context } from "../../context/ModalContext";
import Modal from "../Modal/Modal.jsx";
import ListItem from "../ListItem/ListItem.jsx";
import MyButton from "../UI/MyButton/MyButton";
import Form from "../Form/Form";
import MySelect from "../UI/MySelect/MySelect";
import { addPostAction, removePostAction } from "../../store/postReducer";

const PostList = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSort, setSelectedSort] = useState('');
  const { setActive} = useContext(Context);
  const posts = useSelector(state => state.posts.posts);

  const sortedPosts = useMemo(() => {
    if(selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    if(searchQuery) {
      return sortedPosts.filter(post => post.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return sortedPosts;
  }, [searchQuery, sortedPosts])

  const addPost = (event, newPost) => {
    event.preventDefault();
    newPost = Object.assign({id: posts.length + 1}, newPost);
    dispatch(addPostAction(newPost));
    setActive(false);
  };

  const removePost = (post) => {
    dispatch(removePostAction(post));
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }

  return (
    <div className="Post">
      <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            {value: "name", name: "По имени"},
            {value: "surname", name: "По фамилии"},
            {value: "description", name: "По описанию"},
          ]}/>
      <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="...Поиск"
      />
      {sortedAndSearchedPosts.length !== 0
      ? sortedAndSearchedPosts.map(post => (
        <ListItem post={post} key={post.id} removePost={removePost}/>
        ))
      : <div>Посты не найдены</div>
      }
      <MyButton onClick={() => setActive(true)}>Добавить пользователя</MyButton>
      <Modal>
        <Form addPost={addPost}></Form>
      </Modal>
    </div>
  );
};

export default PostList;