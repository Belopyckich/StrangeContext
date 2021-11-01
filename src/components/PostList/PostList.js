import React, { useContext, useState } from "react";
import { Context } from "../../context/ModalContext";
import Modal from "../Modal/Modal.jsx";
import ListItem from "../ListItem/ListItem.jsx";
import MyButton from "../UI/MyButton/MyButton";
import Form from "../Form/Form";

const PostList = () => {
  const { active, setActive, error, setError } = useContext(Context);
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Eugene",
      surname: "Demidov",
      description: "Hello all",
      email: "evgenij.demidov.1998@mail.ru",
    },
    {
      id: 2,
      name: "Liza",
      surname: "Demidova",
      description: "Hello all",
      email: "liza.demidova.2007@mail.ru",
    },
    {
      id: 3,
      name: "Varya",
      surname: "Borisovna",
      description: "Hello all",
      email: "varya.borisovna.2006@mail.ru",
    },
    {
      id: 4,
      name: "Kostya",
      surname: "Ravkovich",
      description: "Hello all",
      email: "son.of.shit.1999@mail.ru",
    },
    {
      id: 5,
      name: "Maksim",
      surname: "Klimashenok",
      description: "Hello all",
      email: "maksim.klimashenok.1999@mail.ru",
    },
    {
      id: 6,
      name: "Senya",
      surname: "Demidova",
      description: "Hello all",
      email: "senya.demidova.2015@mail.ru",
    },
    {
      id: 7,
      name: "Lesha",
      surname: "Mamai",
      description: "Hello all",
      email: "lesha.mamai.1998@mail.ru",
    },
  ]);

  const addPost = (event, newPost) => {
    event.preventDefault();
    if (error || Object.values(newPost).includes("")) {
      setActive(true);
    } else {
      newPost = Object.assign({id: posts.length + 1}, newPost);
      setPosts([newPost, ...posts]);
      setActive(false);
    }
  };

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="Post">
      <select>
        <option value="value1">По названию</option>
        <option value="value1">По описанию</option>
      </select>
      {posts.length !== 0
      ? posts.map((post) => (
        <ListItem post={post} key={post.id} deletePost={deletePost}/>
        ))
      : <div>Посты не найдены</div>
      }
      <MyButton onClick={() => setActive(true)}>Добавить пользователя</MyButton>
      <Modal>
        <Form addPost={addPost} active={active} setActive={setActive}></Form>
      </Modal>
    </div>
  );
};

export default PostList;