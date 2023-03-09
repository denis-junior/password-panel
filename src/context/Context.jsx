import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext({});

export function ContextProvider({ children }) {
  const [passwords, setPasswords] = useState([]);
  const [currentPassword, setCurrentPassword] = useState(0);

  const handlePassword = (newPassword) => {
    setPasswords((oldData) => [newPassword, ...oldData]);
  };

  const getLocalStoragePasswords = (e) => {
    const { key, newValue } = e;
    if (key === "pass") {
      setPasswords(JSON.parse(newValue));
    }
  };

  useEffect(() => {
    const myStorage = localStorage.getItem("pass");
    if (myStorage?.length) setPasswords(JSON.parse(myStorage));
    window.addEventListener("storage", getLocalStoragePasswords);
    return () => {
      window.removeEventListener("storage", getLocalStoragePasswords);
    };
  }, []);

  useEffect(() => {
    if (passwords.length)
      localStorage.setItem("pass", JSON.stringify(passwords));
  }, [passwords]);

  return (
    <Context.Provider value={{ passwords, handlePassword }}>
      {children}
    </Context.Provider>
  );
}

export function usePasswords() {
  return useContext(Context);
}
