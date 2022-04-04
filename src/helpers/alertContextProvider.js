import React, { createContext, useContext, useState } from "react";

const Context = createContext({});

export const AlertContextProvider = ({ children }) => {
    const [alertData, setAlertData] = useState({});

    const showAlert = (type, text) => {
        setAlertData({
            isShown: true,
            type,
            text
        });

        hideAlert()
    };

    const hideAlert = () => {
        setTimeout(() => {
            setAlertData({
                isShown: false,
                type: '',
                text: ''
            });
        }, 5000)
    }

    return (
        <Context.Provider
            value={{
                alertData,
                showAlert
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const useAlertContext = () => useContext(Context);