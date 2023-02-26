import React, { useEffect, useState } from "react";
import "../App.css"

function Pannel({passwords, setPassword, currentPassword}) {

  useEffect(() => {
    const channel = new BroadcastChannel("password_panel");
    channel.onmessage = (event) => {
      setPassword(event.data);
    };
    return () => {
      channel.close();
    };
  }, [setPassword]);

  return (
    <div className="view">
        <div className="main-view">
            <p className="main-password-title">Senha</p>
            <h1 className="main-password-number">{passwords[currentPassword]}</h1>
        </div>
        <div className="secondary-view">
            <p className="secondary-title">Ultimas Senhas</p>
            <ul>
                <li className="secondary-box-password">
                    <p className="secondary-password-title">Senha</p>
                    <h4 className="secondary-password-number">{passwords[currentPassword+1]}</h4>
                </li>
                <li className="secondary-box-password">
                    <p className="secondary-password-title">Senha</p>
                    <h4 className="secondary-password-number">{passwords[currentPassword+2]}</h4>
                </li>
                <li className="secondary-box-password">
                    <h4 className="secondary-password-title">Senha</h4>
                    <h4 className="secondary-password-number">{passwords[currentPassword+3]}</h4>
                </li>
                
            </ul>
        </div>
      
    </div>
  );
}

export default Pannel;
