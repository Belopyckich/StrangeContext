import React, {useContext, useEffect} from 'react';
import {Context} from './context/ModalContext';
import Modal from './Modal';

const App = () => {
  const {active, setActive} = useContext(Context);
  useEffect(() => {
    console.log(active);
  }, [active])
  return (
    <div className="App">
      <button onClick={() => setActive(true)}>Нажми на кнопку</button>
      <Modal active={active} setActive={setActive}>
          <h1>Hello world</h1>
      </Modal>
    </div>
  );
}

export default App;
