import React, { createContext, useContext, useState } from "react";

const Context = createContext({});

export const AlertContextProvider = ({ children }) => {
    const [alertData, setAlertData] = useState({});
    const [loading, setLoading] = useState(true);

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

    const showHideLoading =  {
       isVisible : (isVisible) => {
           setLoading(isVisible);
       }
    }




    return (
        <Context.Provider
            value={{
                alertData,
                showAlert,
                loading,
                showHideLoading
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const useAlertContext = () => useContext(Context);