import React, {useContext, useState} from 'react';
import {Context} from './context/ModalContext';
import Modal from './components/Modal/Modal.jsx';
import ListItem from './components/ListItem/ListItem.jsx';
import MyButton from './components/UI/MyButton/MyButton';
import Form from './components/Form/Form';

const lodash = require("lodash");  

const App = () => {
  const {active, setActive, error, setError} = useContext(Context);
  const [posts, setPosts] = useState([
    {id: 1, name: 'Eugene', surname: 'Demidov', description: 'Hello all', email: 'evgenij.demidov.1998@mail.ru'},
    {id: 2, name: 'Liza', surname: 'Demidova', description: 'Hello all', email: 'liza.demidova.2007@mail.ru'},
    {id: 3, name: 'Varya', surname: 'Borisovna', description: 'Hello all', email: 'varya.borisovna.2006@mail.ru'},
    {id: 4, name: 'Kostya', surname: 'Ravkovich', description: 'Hello all', email: 'son.of.shit.1999@mail.ru'},
    {id: 5, name: 'Maksim', surname: 'Klimashenok', description: 'Hello all', email: 'maksim.klimashenok.1999@mail.ru'},
    {id: 6, name: 'Senya', surname: 'Demidova', description: 'Hello all', email: 'senya.demidova.2015@mail.ru'},
    {id: 7, name: 'Lesha', surname: 'Mamai', description: 'Hello all', email: 'lesha.mamai.1998@mail.ru'},
  ]);

  const addPost = (event, newPost, setProps) => {
    event.preventDefault();
    if(error || Object.values(newPost).includes('')) {
      setActive(true);
      setProps.forEach(setter => setter(''));
    } else {
    setPosts([newPost, ...posts]);
    console.log(setProps);
    setProps.forEach(setter => setter(''));
    setActive(false);
    }
  }



  return (
    <div className="App">
      {posts.map(post => 
        <ListItem post={post} key={post.id} />
      )}
      <MyButton onClick={() => setActive(true)}>Добавить пользователя</MyButton>
      <Modal>
        <Form addPost={addPost}></Form>
      </Modal>
    </div>
  );
}

export default App;
