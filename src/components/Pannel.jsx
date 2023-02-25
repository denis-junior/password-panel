import React, { useState, useEffect } from "react";
import "../App.css"

function Pannel() {
  const [password, setPassword] = useState("");

  useEffect(() => {
    const channel = new BroadcastChannel("password_panel");
    channel.onpassword = (event) => {
      setPassword(event.data);
    };
    return () => {
      channel.close();
    };
  }, []);

  return (
    <div className="view">
        <div className="main-view">
            <p className="main-password-title">Senha</p>
            <h1 className="main-password-number">{password}0</h1>
        </div>
        <div className="secondary-view">
            <p className="secondary-title">Ultimas Senhas</p>
            <ul>
                <li className="secondary-box-password">
                    <p className="secondary-password-title">Senha</p>
                    <h4 className="secondary-password-number">{password}3</h4>
                </li>
                <li className="secondary-box-password">
                    <p className="secondary-password-title">Senha</p>
                    <h4 className="secondary-password-number">{password}2</h4>
                </li>
                <li className="secondary-box-password">
                    <h4 className="secondary-password-title">Senha</h4>
                    <h4 className="secondary-password-number">{password}1</h4>
                </li>
                
            </ul>
        </div>
      
    </div>
  );
}

export default Pannel;
