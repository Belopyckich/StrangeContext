import React, {useState} from 'react';

export const Context = React.createContext();

export const ModalContext = ({children}) => {
    const [active, setActive] = useState(false);
    const [error, setError] = useState(false);

    return (
        <Context.Provider value={{active, setActive, error, setError}}>
            {children}
        </Context.Provider>
    )
}