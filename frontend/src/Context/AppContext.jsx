// src/context/AppContext.jsx
import React, { createContext } from 'react';
import axios from 'axios';

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const loginUser = async (email, password) => {
    try {
      // eslint-disable-next-line no-undef
      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/login`, { email, password });
      console.log("Login success", res.data);
    } catch (err) {
      console.error("Login error", err);
    }
  };

  return (
    <AppContext.Provider value={{ loginUser }}>
      {children}
    </AppContext.Provider>
  );
};
