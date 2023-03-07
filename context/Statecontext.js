import { createContext, useContext, useState } from "react";
const Context = createContext();

export const StateContext = ({ children }) => {
  const [alert, setAlert] = useState({show: false, type: '',message: '', timeout: 3000 })
  const [loading, setLoading] = useState(false)
  const [adminMenu, setAdminMenu] = useState(false)
  return (
    <Context.Provider
      value={{
        adminMenu,
        setAdminMenu,
        alert,
        setAlert,
        setLoading,
        loading
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
