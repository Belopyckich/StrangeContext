import React, {useState} from 'react';

export const Context = React.createContext();

export const ModalContext = ({children}) => {
    const [active, setActive] = useState(false);


    return (
        <Context.Provider value={{active, setActive}}>
            {children}
        </Context.Provider>
    )
}