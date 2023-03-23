import React, { useEffect, useState } from "react";
import "../App.css";
import { usePasswords } from "../context/Context";

function Pannel() {

  const {passwords} = usePasswords();

  return (
    <div className="view">
      <div className="main-view">
        <p className="main-password-title">Senha Atual</p>
        <h1 className="main-password-number">
          {/* {passwords[currentPassword]} */}
          {passwords.map((value, index) => {
        return (
          <div key={index}>{value}</div>
        )
      })}
          </h1>
      </div>
      <div className="secondary-view">
        <p className="secondary-title">Últimas Senhas</p>
        <ul className="ul-pannel">
          <li className="secondary-box-password">
            <p className="secondary-password-title">Senha</p>
            <h4 className="secondary-password-number">
              {/* {passwords[currentPassword - 1]} */}
            </h4>
          </li>
          <li className="secondary-box-password">
            <p className="secondary-password-title">Senha</p>
            <h4 className="secondary-password-number">
              {/* {passwords[currentPassword - 2]} */}
            </h4>
          </li>
          <li className="secondary-box-password">
            <h4 className="secondary-password-title">Senha</h4>
            <h4 className="secondary-password-number">
              {/* {passwords[currentPassword - 3]} */}
            </h4>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pannel;
