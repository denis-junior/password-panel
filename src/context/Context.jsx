import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext({});

export function ContextProvider({ children }) {
  const [passwords, setPasswords] = useState([]);
  
  const [currentPassword, setCurrentPassword] = useState(0);

  const handlePassword = (newPassword) => {
      setPasswords((oldData)=>[newPassword, ...oldData])
  };

  const trololo = (e) => {
    const { key, newValue } = e;
    if (key === "pass") {
        console.log(newValue)
      setPasswords(JSON.parse(newValue));
    }
  };
  
  useEffect(() => {
    const meuStorage = localStorage.getItem("pass")
    if (meuStorage?.length) setPasswords(JSON.parse(meuStorage));
    window.addEventListener("storage", trololo);
    return () => {
      window.removeEventListener("storage", trololo);
    };
  }, []);

    useEffect(() => {
        if (passwords.length) localStorage.setItem("pass", JSON.stringify(passwords));
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
