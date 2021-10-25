import React, {useContext} from 'react';
import { Context } from '../../context/ModalContext';
import style from './Modal.module.css';
const Modal = ({children}) => {
    const {active, setActive} = useContext(Context);

    return (
        <div>
            <div className={active ? style.modal__active + ' ' + style.modal : style.modal} onClick={() => setActive(false)}>
                <div className = {style.modal__content} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;